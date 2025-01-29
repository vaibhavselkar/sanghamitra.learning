const jwt = require('jsonwebtoken');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const router = express.Router();
const cookieParser = require('cookie-parser');
const session = require('express-session');
router.use(cookieParser());
env = require('dotenv').config();
const authenticate = require('../middleware/authenticate');
const VocabQuestion = require('../model/vocabSchema');
const { VocabScore, addOrUpdateAssessment } = require('../model/vocabScoreSchema');
const { Topic, WritingResponse } = require('../model/writingSchema'); 
const FractionQuestion = require('../model/MathData');
const AlgebraQuestion = require('../model/algebraSchema');
const AlgebraScores = require('../model/algebraScoreAdd');
const RC_Guide = require('../model/readingcomprehensionguide');
const ReadingPassages = require('../model/readingPassages');
const ReadingComprehensionScore = require('../model/readingcomprehensionscore');

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('Hello World from router');
})

router.post('/register', async (req, res) => {
    const {name, email, password} = req.body; 

    if (!name || !email || !password) {
        return res.status(422).json({error: 'Please add all fields'});
    }

    try {
        const userExist = await User.findOne({email: email});
        if (userExist) {
            return res.status(422).json({error: 'User already exists'});
        }
        const user = new User({name, email, password});
        // need a middleware - presave method
        await user.save();
        res.status(201).json({message: 'User registered successfully'});
    } catch (err) {
        console.log(err);
    }

});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Please provide all fields' });
    }

    try {
        const user = await User.findOne({ email: email });
        console.log('User found:');

        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password match:', isMatch);

        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = await user.generateAuthToken();
        req.session.userId = user._id;
        req.session.token = token;
        req.session.username = user.name;
        req.session.email = user.email;
        console.log(req.session.email, req.session.username);
        res.status(200).json({ message: 'User signed in successfully' });

    } catch (error) {
        console.error('Error signing in user:', error);
        res.status(500).json({ error: 'Server error, failed to sign in' });
    }
});

router.get('/students-count', async (req, res) => {
  try {
    // Fetch all users (excluding sensitive fields like password)
    const users = await User.find({}, { password: 0 });

    // Count the total number of users
    const totalUsers = await User.countDocuments();

    // Return both the count and the list of users
    res.status(200).json({ totalUsers, users });
  } catch (err) {
      console.error('Error fetching users and count:', err);
      res.status(500).json({ error: 'Server error, failed to fetch users' });
  }
});

// Endpoint to fetch login history for a specific user by email
router.get('/login-history', async (req, res) => {
  const { email } = req.query; // Expect email as a query parameter

  try {
    // Check if the email parameter is provided
    if (!email) {
      return res.status(400).json({ message: 'Email parameter is required' });
    }

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Extract the login history
    const loginHistory = user.loginHistory || [];

    // Return the login history
    res.status(200).json({ email: user.email, loginHistory });
  } catch (error) {
    console.error('Error fetching login history:', error);
    res.status(500).json({ message: 'Server error, failed to fetch login history'});
  }
});

// Endpoint to get session data
router.get('/session-info', (req, res) => {
    if (req.session.userId) {
        return res.status(200).json({
            email: req.session.email,
            username: req.session.username,
            userid: req.session.username
        });
    } else {
        return res.status(401).json({ error: 'Unauthorized access' });
    }
});

router.post('/reset-password/check-email', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'Email found, proceed to reset password' });
    } catch (error) {
        console.error('Error checking email:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.post('/reset-password/set-new-password', async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to get all topics
router.get('/gre_writing_topics', authenticate, async (req, res) => {
  try {
    const topics = await Topic.find({});
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to save writing response
router.post('/gre_writing_response', async (req, res) => {
  const { username, email, topic_id, topic_text, time, response_text } = req.body;

  if (!username || !email || !topic_id || !topic_text || !time || !response_text) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Find existing entry for the user by email
    let userResponse = await WritingResponse.findOne({ email });

    if (userResponse) {
      // Add new response to the existing user's responses array
      userResponse.responses.push({
        topic_id,
        topic_text,
        response_text,
        time,
        date_submitted: new Date()
      });
    } else {
      // Create a new entry for the user
      userResponse = new WritingResponse({
        username,
        email,
        responses: [{
          topic_id,
          topic_text,
          response_text,
          time,
          date_submitted: new Date()
        }]
      });
    }

    // Save the document
    await userResponse.save();
    res.status(200).json({ message: 'Response saved successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware to check for the JWT token
router.get('/check-auth', (req, res) => {
    if (req.session.userId) {
        res.status(200).json({ authenticated: true });
    } else {
        res.status(200).json({ authenticated: false });
    }
});

router.get('/dashboard', authenticate, (req, res) => {
    console.log('Inside /dashboard route');
    console.log('User Data:', req.rootUser);
    res.json({ name: req.rootUser.name, email: req.rootUser.email, token: req.token });
});


// Logout route
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ error: 'Logout failed' });
        }
        res.clearCookie('sessionId', {
            path: '/',
            httpOnly: true,
            sameSite: 'None',
            secure: true
        });
        res.status(200).json({ message: 'Logout successful' });
    });
});

// Route to get all algebra questions
router.get('/algebra_questions', async (req, res) => {
  const { topic, difficultyLevel } = req.query;

  try {
    let questions;

    if (topic) {
      if (difficultyLevel) {
        // Fetch questions for the specific topic and difficulty level
        questions = await AlgebraQuestion.find({ topic: topic, difficultyLevel: difficultyLevel });
      } else {
        // Fetch questions for the specific topic only
        questions = await AlgebraQuestion.find({ topic: topic });
      }
    } else {
      // Fetch all questions if no topic is provided
      questions = await AlgebraQuestion.find({});
    }

    return res.status(200).json(questions);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'An error occurred while fetching algebra questions' });
  }
});

// Store algebra quiz attempt
router.post('/algebra_score_add', async (req, res) => {
  const { username, email, topic, questionId, answer, correct, difficultyLevel, current_level } = req.body;

  try {
    // Find user by username and email
    let userScore = await AlgebraScores.findOne({ username, email });

    if (!userScore) {
      // If user doesn't exist, create a new entry with default level
      userScore = new AlgebraScores({
        username,
        email,
        topics: [{
          topic,
          answeredQuestions: [questionId],
          current_level,  // Ensure current_level is saved here
          questions: [{ questionId, answer, correct, difficultyLevel }]
         
        }]
      });
    } else {
      // Find the topic index
      let topicIndex = userScore.topics.findIndex(t => t.topic === topic);

      if (topicIndex === -1) {
        // If topic doesn't exist, create a new topic entry with current_level
        userScore.topics.push({
          topic,
          answeredQuestions: [questionId],
          current_level,  // Ensure current_level is saved here
          questions: [{ questionId, answer, correct, difficultyLevel }]
          
        });
      } else {
        // Add the new question to the existing topic
        userScore.topics[topicIndex].questions.push({ questionId, answer, correct, difficultyLevel });

        // Add the question ID to the answeredQuestions array if not already present
        if (!userScore.topics[topicIndex].answeredQuestions.includes(questionId)) {
          userScore.topics[topicIndex].answeredQuestions.push(questionId);
        }

        // Update the current_level in the existing topic
        userScore.topics[topicIndex].current_level = current_level;
      }
    }

    // Save the updated userScore to the database
    await userScore.save();

    // Return the updated user score as a response
    return res.status(200).json(userScore);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'An error occurred while storing quiz attempt' });
  }
});


router.get('/algebra_scores', async (req, res) => {
  try {
    const { email, topic } = req.query;

    // Step 1: Fetch all data
    let userScores = await AlgebraScores.find().exec();

    // Step 2: Filter by email if provided
    if (email) {
      userScores = userScores.filter(userScore => userScore.email === email);
    }

    // Step 3: Filter by topic if provided
    if (topic) {
      userScores = userScores.map(userScore => {
        return {
          ...userScore.toObject(),
          topics: userScore.topics.filter(t => t.topic === topic)
        };
      }).filter(userScore => userScore.topics.length > 0);
    }

    // Step 4: Return response based on the presence of filtered data
    if (userScores.length === 0) {
      return res.json({});
    }

    // Step 5: Return the filtered data or all data if no filters applied
    res.json(userScores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});





// Endpoint to get all vocabulary questions or filtered by CEFR level and/or topic
router.get('/vocab-questions', async (req, res) => {
  try {
    const { cefrLevel, topic } = req.query;
    let filter = {};

    if (cefrLevel) {
      filter.CEFRLevel = cefrLevel;
    }

    if (topic) {
      filter.topic = topic;
    }

    const questions = await VocabQuestion.find(filter);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to get vocab scores
router.get('/vocabscores', async (req, res) => {
  const { email, date } = req.query;

  try {
    if (!email) {
      // Fetch all scores if no email is provided
      const scores = await VocabScore.find({});
      return res.status(200).json(scores);
    }

    // Fetch scores for the specific user
    const userScores = await VocabScore.findOne({ email: email });
    
    if (!userScores) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (date && date !== 'null') {
      // Find the specific assessment by date
      const assessment = userScores.assessments.find(assessment => assessment.date.toISOString() === date);
      if (!assessment) {
        return res.status(404).json({ message: 'Assessment not found for the provided date' });
      }
      return res.status(200).json({ email: userScores.email, assessments: [assessment] });
    }

    // Return all scores for the user if no date is provided or if date is 'null'
    res.status(200).json(userScores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


  
  // POST route to add a new score
router.post('/vocabscoreadd', async (req, res) => {
  const { username, email, assessments } = req.body;

  if (!username || !email || !assessments) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  try {
    // Assume assessments is an array of assessment objects
    const newAssessment = assessments[0];

    await addOrUpdateAssessment(username, email, newAssessment);

    res.status(201).json({ message: 'Score added successfully' });
  } catch (error) {
    console.error('Error adding score:', error);
    res.status(500).json({ error: 'Server error, failed to add score' });
  }
});

router.get('/fraction_questions', async (req, res) => {
    try {
        const questions = await FractionQuestion.find();
        res.json(questions);
    } catch (err) {
        res.status(500).send(err);
    }
});

//Reading Comprehension 

// Save or Update Progress
router.post('/save-rc-guide', async (req, res) => {
  const { email, categoryName, value } = req.body;

  if (!email || !categoryName || value === undefined) {
    return res.status(400).json({ message: 'Email, category name, and value are required' });
  }

  try {
    // Check if the categoryName is valid
    const validCategories = ['mainIdea', 'authorsPurpose', 'supportingDetails', 'inferences', 'vocabulary'];
    if (!validCategories.includes(categoryName)) {
      return res.status(400).json({ message: 'Invalid category name' });
    }

    // Find guide by email
    let guide = await RC_Guide.findOne({ email });

    if (!guide) {
      // If guide does not exist, create it with default values
      guide = new RC_Guide({
        email,
        categories: { [categoryName]: value },
      });
    } else {
      // Update only the specified category
      guide.categories[categoryName] = value;
      guide.updatedAt = Date.now(); // Update timestamp
    }

    await guide.save();
    res.status(200).json({ message: `Category '${categoryName}' updated successfully`, guide });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Fetch Progress by Email
router.get('/progress-rc-guide', async (req, res) => {
  const { email } = req.query; // Extract email from the query parameter

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    // Find guide by email
    const guide = await RC_Guide.findOne({ email });

    if (!guide) {
      return res.status(404).json({ message: 'Guide not found for the provided email' });
    }

    res.status(200).json({
      message: 'User progress fetched successfully',
      guide,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Endpoint to fetch passages by topic and level and by _id
router.get('/reading_passages', async (req, res) => {
  const { topic, level, _id } = req.query;

  try {
    // If passage_id is provided, fetch the passage by its ID
    if (_id) {
      // Validate passage_id
      if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).send({ message: 'Invalid passage ID.' });
      }

      const passage = await ReadingPassages.findById(_id);

      // Check if passage exists
      if (!passage) {
        return res.status(404).send({ message: 'No passage found with the specified ID.' });
      }

      // Respond with the specific passage
      return res.status(200).send({
        message: 'Passage retrieved successfully.',
        passage
      });
    }

    // Validate topic and level if passage_id is not provided
    if (!topic || !level) {
      return res.status(400).send({ message: 'Both topic and level are required unless passage_id is provided.' });
    }

    // Fetch passages matching the topic and level
    const passages = await ReadingPassages.find({
      topic_category: topic,
      passage_level: level
    });

    // Check if passages are found
    if (passages.length === 0) {
      return res.status(404).send({ message: 'No passages found for the specified topic and level.' });
    }

    // Respond with the retrieved passages
    res.status(200).send({
      message: 'Passages retrieved successfully.',
      passages
    });
  } catch (error) {
    console.error('Error fetching passages:', error);
    res.status(500).send({
      message: 'Failed to fetch passages.',
      error
    });
  }
});

// Save quiz data and score
router.post('/rc_score', async (req, res) => {
  const { email, topic, level, correctAnswers, totalQuestions, solvedPassages, passageName, quizData } = req.body;

  // Validation for required fields
  if (!email || !topic ) {
      return res.status(400).send({ message: 'Invalid data' });
  }

  const normalizedLevel = level.toLowerCase();
  const scorePercentage = (correctAnswers / totalQuestions) * 100;

  try {
      // Find or create user progress
      let userProgress = await ReadingComprehensionScore.findOne({ email });

      if (!userProgress) {
          userProgress = new ReadingComprehensionScore({ email });
      }

      // Check if the topic exists, if not, initialize it
      if (!userProgress.topics.has(topic)) {
          userProgress.topics.set(topic, {
              topic,
              solvedPassages: [],
              currentPassage: null,
              current_level: 'easy',
              consecutivePerfectScores: 0,
          });
      }

      const topicData = userProgress.topics.get(topic);

      // Prevent re-solving the same passage
      if (topicData.solvedPassages.some((passage) => passage.passageId.toString() === solvedPassages)) {
          return res.status(400).send({ message: 'Passage already solved' });
      }

      // Add the solved passage data
      topicData.solvedPassages.push({
          passageId: solvedPassages,
          passageName: passageName,
          score: scorePercentage,
          timestamp: new Date(),
          quizData, // Include full quiz data
      });

      // Handle consecutive perfect scores for level upgrade
      if (scorePercentage === 100) {
          topicData.consecutivePerfectScores += 1;

          if (topicData.consecutivePerfectScores >= 3) {
              topicData.current_level = getNextLevel(normalizedLevel);
              topicData.consecutivePerfectScores = 0;

              userProgress.topics.set(topic, topicData);
              await userProgress.save();

              return res.status(200).send({
                  message: 'Score saved successfully.',
                  upgraded: true,
                  newLevel: topicData.current_level,
              });
          }
      } else {
          topicData.consecutivePerfectScores = 0;
      }

      // Update current level
      topicData.current_level = normalizedLevel;
      userProgress.topics.set(topic, topicData);

      // Save the progress
      await userProgress.save();

      res.status(201).send({ message: 'Score saved successfully.', upgraded: false });
  } catch (error) {
      console.error('Error saving score:', error);
      res.status(500).send({ message: 'Failed to save score', error });
  }
});

// Helper function to determine the next level
function getNextLevel(currentLevel) {
  const levels = ['easy', 'medium', 'hard', 'mastered'];
  const currentIndex = levels.indexOf(currentLevel);
  return currentIndex < levels.length - 1 ? levels[currentIndex + 1] : currentLevel;
}

router.get('/readingcomprehensionscore', async (req, res) => {
  const { topic, email } = req.query;

  try {
      if (!email && !topic) {
          const allData = await ReadingComprehensionScore.find();
          return res.status(200).send(allData);
      }

      if (!email && topic) {
          const topicData = await ReadingComprehensionScore.find({ [`topics.${topic}`]: { $exists: true } });
          if (topicData.length === 0) {
              return res.status(404).send({ message: `No data found for topic: ${topic}` });
          }
          return res.status(200).send(topicData);
      }

      if (email && !topic) {
          const userData = await ReadingComprehensionScore.findOne({ email });
          if (!userData) {
              return res.status(404).send({ message: `No data found for email: ${email}` });
          }
          return res.status(200).send(userData);
      }

      if (email && topic) {
          const userData = await ReadingComprehensionScore.findOne({ email });
          if (!userData) {
              return res.status(404).send({ message: `No data found for email: ${email}` });
          }
          const topicData = userData.topics.get(topic);
          if (!topicData) {
              return res.status(404).send({ message: `No data found for topic: ${topic}` });
          }
          return res.status(200).send(topicData);
      }

      return res.status(400).send({ message: 'Invalid query parameters' });
  } catch (error) {
      console.error('Error fetching scores:', error);
      res.status(500).send({ message: 'Failed to fetch scores', error });
  }
});






module.exports = router
