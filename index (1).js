const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({
      operation_code: 1
    });
  });
  
  app.post('/bfhl', (req, res) => {
    const { data } = req.body;
  
    // Validate input
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        user_id: "",
        email: "",
        roll_number: "",
        numbers: [],
        alphabets: [],
        highest_lowercase_alphabet: []
      });
    }
  
    // Process data
    const numbers = [];
    const alphabets = [];
    let highestLowercase = '';
  
    data.forEach(item => {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (/^[a-zA-Z]$/.test(item)) {
        alphabets.push(item);
        if (/[a-z]/.test(item)) {
          if (highestLowercase === '' || item > highestLowercase) {
            highestLowercase = item;
          }
        }
      }
    });
  
    res.status(200).json({
      is_success: true,
      user_id: "RachamalluHimaAswitha25082003", // Replace with your actual details
      email: "aswitha.21bce9891@vitapstudent.ac.in",    // Replace with your actual email
      roll_number: "21BCE9891",      // Replace with your actual roll number
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
  });
  