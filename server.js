// Server template
// Server imports
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


// Middleware to read json files coming from client
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware for modularizing routes
const allRoutes = require('./controllers');
app.use(allRoutes);

// Listening for available ports
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));