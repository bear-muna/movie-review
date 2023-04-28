// Util imports for main controller
const express = require('express');
const router = express.Router();
const path = require('path');

// Middleware for notes routes
const moviesRoutes = require('./moviesController');
router.use('/api', moviesRoutes);

module.exports = router;