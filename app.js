const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/db');
const userRoutes = require('./routes/user.routes');

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('✅ e on http://myproject.techscaleups.in');
});

// User routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
