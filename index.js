// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Use middleware to parse JSON requests
app.use(bodyParser.json());

// Define a route that handles POST requests to /process
app.post('/process', (req, res) => {
  // Check if the request body contains a 'input' field
  if (req.body && req.body.input) {
    // Get the input value from the request body
    const inputValue = req.body.input;

    // Perform some processing based on the input value
    const outputValue = processInput(inputValue);

    // Send the output value as a response
    res.json({ output: outputValue });
  } else {
    // If 'input' field is not present in the request body, send an error response
    res.status(400).json({ error: 'Invalid request. Please provide an "input" field in the request body.' });
  }
});

// Function to process input and return a different value based on the input
function processInput(input) {
  // Add your logic here to determine the output based on the input
  // This is a simple example, you can replace it with your own logic
  if (input === 'A') {
    return 'Output for A';
  } else if (input === 'B') {
    return 'Output for B';
  } else {
    return 'Default output';
  }
}

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
