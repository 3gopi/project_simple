const express = require('express');
const app = express();
const db = require('./config/db');
const userRoutes = require('./routes/user.routes');
require('dotenv').config();

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
