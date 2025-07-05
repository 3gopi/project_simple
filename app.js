const express = require('express');
const app = express();
const db = require('./config/db');  // Check if this crashes
require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ ERP running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
