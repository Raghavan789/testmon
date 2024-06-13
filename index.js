// Import the express module
const express = require('express');
const app = express(); // Create an instance of express

// Import the mongoose module
const mongoose = require('mongoose');

// Connection URL and options
const mongoUrl = "mongodb://localhost:27017/myDatabase";
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// Connect to MongoDB using promises
mongoose.connect(mongoUrl, mongoOptions)
  .then(() => {
    console.log('Connected to MongoDB'); // Log success message if connection is successful

    // Start the server after successful database connection
    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err); // Log the error if connection fails
  });

// Define a route for testing
app.get('/', (req, res) => {
    res.send('Hello, World!');
});