// diagnostic_questions.js
export const questions = [
    {
        id: 1,
        title: "Variable Assignment and Data Types",
        difficulty: "Beginner",
        description: "Create three variables: an integer <code>age</code> with value 25, a floating-point <code>height</code> with value 5.9, and a string <code>name</code> with value 'Alex'. Then print them all on separate lines.",
        starter_code: "# Create your variables here\n\n# Print them on separate lines\n",
        hint: "In Python, variables are created with the assignment operator (=). Remember to use the correct data type for each variable and use the print() function for output.",
        test_cases: [
          {
            input: [],
            expected: "25\n5.9\nAlex",
            description: "Check if all variables are correctly assigned and printed"
          }
        ]
    },
    {
      id: 2,
      title: "Conditional Statements",
      difficulty: "Beginner",
      description: "Write a function called <code>check_number</code> that takes a number as an argument and returns 'Positive' if the number is greater than 0, 'Negative' if it's less than 0, and 'Zero' if it equals 0.",
      starter_code: "def check_number(num):\n    # Your code here\n    pass\n",
      hint: "Use if, elif, and else statements to check the different conditions. Remember to use the comparison operators (>, <, ==).",
      test_cases: [
        {
          input: [5],
          expected: "Positive",
          description: "Test with positive number"
        },
        {
          input: [-3],
          expected: "Negative",
          description: "Test with negative number"
        },
        {
          input: [0],
          expected: "Zero",
          description: "Test with zero"
        }
      ]
    },
    {
      id: 3,
      title: "For Loops and Lists",
      difficulty: "Beginner",
      description: "Write a function called <code>sum_even_numbers</code> that takes a list of integers and returns the sum of all even numbers in the list.",
      starter_code: "def sum_even_numbers(numbers):\n    # Your code here\n    pass\n",
      hint: "You can use a for loop to iterate through the list and an if statement with the modulo operator (%) to check if a number is even.",
      test_cases: [
        {
          input: [[1, 2, 3, 4, 5, 6]],
          expected: "12",
          description: "Test with mixed numbers"
        },
        {
          input: [[2, 4, 6, 8]],
          expected: "20",
          description: "Test with all even numbers"
        },
        {
          input: [[1, 3, 5, 7]],
          expected: "0",
          description: "Test with all odd numbers"
        }
      ]
    },
    {
      id: 4,
      title: "String Manipulation",
      difficulty: "Intermediate",
      description: "Write a function called <code>count_vowels</code> that takes a string and returns the number of vowels (a, e, i, o, u) in the string. The function should be case-insensitive.",
      starter_code: "def count_vowels(text):\n    # Your code here\n    pass\n",
      hint: "Convert the string to lowercase using the .lower() method, then iterate through each character and check if it's a vowel.",
      test_cases: [
        {
          input: ["Hello World"],
          expected: "3",
          description: "Basic test"
        },
        {
          input: ["AEIOU"],
          expected: "5",
          description: "All vowels, uppercase"
        },
        {
          input: ["rhythm"],
          expected: "0",
          description: "No vowels"
        }
      ]
    },
    {
      id: 5,
      title: "Dictionary Operations",
      difficulty: "Intermediate",
      description: "Write a function called <code>word_frequency</code> that takes a string of words and returns a dictionary with each word as a key and its frequency as the value. Ignore case and remove punctuation.",
      starter_code: "def word_frequency(text):\n    # Your code here\n    pass\n",
      hint: "Split the string into words using .split(), convert to lowercase with .lower(), and use a dictionary to count occurrences. You might want to use the string module for removing punctuation.",
      test_cases: [
        {
          input: ["The quick brown fox jumps over the lazy dog"],
          expected: "{'the': 2, 'quick': 1, 'brown': 1, 'fox': 1, 'jumps': 1, 'over': 1, 'lazy': 1, 'dog': 1}",
          description: "Basic sentence test"
        },
        {
          input: ["Hello, hello, HELLO!"],
          expected: "{'hello': 3}",
          description: "Test with different cases and punctuation"
        }
      ]
    },
    {
      id: 6,
      title: "Error Handling",
      difficulty: "Intermediate",
      description: "Write a function called <code>safe_divide</code> that takes two parameters and attempts to divide the first by the second. If the division cannot be performed (e.g., division by zero), it should return the string 'Error: Division by zero'.",
      starter_code: "def safe_divide(a, b):\n    # Your code here\n    pass\n",
      hint: "Use a try-except block to catch the ZeroDivisionError exception that occurs when dividing by zero.",
      test_cases: [
        {
          input: [10, 2],
          expected: "5.0",
          description: "Normal division"
        },
        {
          input: [10, 0],
          expected: "Error: Division by zero",
          description: "Division by zero"
        }
      ]
    },
    {
      id: 7,
      title: "List Comprehension",
      difficulty: "Intermediate",
      description: "Use list comprehension to write a function called <code>get_squares</code> that takes a list of numbers and returns a new list containing the squares of all numbers that are divisible by 3.",
      starter_code: "def get_squares(numbers):\n    # Your code here - use list comprehension\n    pass\n",
      hint: "List comprehension has the form [expression for item in iterable if condition]. You'll need to include a condition to check if the number is divisible by 3.",
      test_cases: [
        {
          input: [[1, 2, 3, 4, 5, 6, 7, 8, 9]],
          expected: "[9, 36, 81]",
          description: "Basic test"
        },
        {
          input: [[3, 6, 9, 12]],
          expected: "[9, 36, 81, 144]",
          description: "All divisible by 3"
        },
        {
          input: [[1, 2, 4, 5, 7, 8]],
          expected: "[]",
          description: "None divisible by 3"
        }
      ]
    },
    {
      id: 8,
      title: "Function with Default Parameters",
      difficulty: "Advanced",
      description: "Write a function called <code>create_email</code> that takes parameters: first_name, last_name, domain='gmail.com'. It should return an email in the format 'firstname.lastname@domain'. If no domain is provided, it should use the default.",
      starter_code: "# Define your function with default parameters here\n",
      hint: "Define the function with three parameters, making the third one optional by providing a default value. Construct the email string using string concatenation or f-strings.",
      test_cases: [
        {
          input: ["john", "doe"],
          expected: "john.doe@gmail.com",
          description: "Default domain"
        },
        {
          input: ["jane", "smith", "example.com"],
          expected: "jane.smith@example.com",
          description: "Custom domain"
        }
      ]
    },
    {
      id: 9,
      title: "Recursive Function",
      difficulty: "Advanced",
      description: "Write a recursive function called <code>factorial</code> that calculates the factorial of a number. The factorial of n is the product of all positive integers less than or equal to n.",
      starter_code: "def factorial(n):\n    # Your recursive solution here\n    pass\n",
      hint: "Remember the base case: factorial of 0 or 1 is 1. For other values, recursive formula is n * factorial(n-1).",
      test_cases: [
        {
          input: [5],
          expected: "120",
          description: "Factorial of 5"
        },
        {
          input: [0],
          expected: "1",
          description: "Base case: factorial of 0"
        },
        {
          input: [10],
          expected: "3628800",
          description: "Larger number"
        }
      ]
    },
    {
      id: 10,
      title: "Algorithmic Problem Solving",
      difficulty: "Advanced",
      description: "Write a function called <code>is_palindrome</code> that checks if a given string is a palindrome (reads the same forwards and backwards). The function should ignore spaces, punctuation, and case. For example, 'A man, a plan, a canal: Panama' is a palindrome.",
      starter_code: "def is_palindrome(text):\n    # Your solution here\n    pass\n",
      hint: "First, clean the string by removing spaces and punctuation and converting to lowercase. Then compare the cleaned string with its reverse using string slicing [::-1].",
      test_cases: [
        {
          input: ["A man, a plan, a canal: Panama"],
          expected: "True",
          description: "Classic palindrome with spaces and punctuation"
        },
        {
          input: ["race a car"],
          expected: "False",
          description: "Not a palindrome"
        },
        {
          input: ["Was it a car or a cat I saw?"],
          expected: "True",
          description: "Another palindrome with punctuation"
        }
      ]
    }
  ];