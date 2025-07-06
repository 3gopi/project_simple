const express = require('express');
const app = express();

// Define your API route under /api
app.use('/api/eroproject', require('./routes/eroproject'));

// Example route handler file ./routes/eroproject.js
// (Create this file if not exists)

module.exports = require('express').Router()
  .get('/', (req, res) => {
    res.json({ message: "Hello from eroproject API!" });
  });
  
// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
