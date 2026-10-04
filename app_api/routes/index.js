const express = require('express');
const router = express.Router();

// Import the API controller for trips
const tripsController = require('../controllers/trips');

// Route for all trips
router
  .route('/trips')
  .get(tripsController.tripsList);

// Route for a single trip by tripCode
router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode);

module.exports = router;