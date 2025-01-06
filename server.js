const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

// Database connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set('debug', true);

// Start server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
