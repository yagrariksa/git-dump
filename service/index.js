// Import the required modules
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Set up the server to listen on a port
const port = 3000; // You can choose any available port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
