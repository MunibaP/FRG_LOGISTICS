require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from React frontend (after build)
app.use(express.static(path.join(__dirname, '../dist')));

// Import routes
const routes = require('./routes'); // import routes
app.use('/api', routes);
// const formRoutes = require('./routes/forms');
// app.use('/api', formRoutes);

// For any other route, serve React's index.html (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Test route
// app.get('/', (req, res) => {
//   res.send('FRG Logistics Backend Running');
// });

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
