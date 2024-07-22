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
const VocabScore = require('../model/vocabScoreSchema');

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

// Endpoint to get all vocabulary questions
router.get('/vocab-questions', authenticate, async (req, res) => {
  try {
    const questions = await VocabQuestion.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint to get vocab scores
router.get('/vocabscores', async (req, res) => {
    try {
      const scores = await VocabScore.find({});
      res.status(200).json(scores);
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
          const newScore = new VocabScore({
              username,
              email,
              assessments
          });
  
          const savedScore = await newScore.save();
          res.status(201).json({ message: 'Score added successfully', data: savedScore });
      } catch (error) {
          console.error('Error adding score:', error);
          res.status(500).json({ error: 'Server error, failed to add score' });
      }
  });

module.exports = router
