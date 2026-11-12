const { expressjwt: jwt } = require('express-jwt');

const requireAuth = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256']
});
const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(requireAuth, tripsController.tripsAddTrip);

router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(requireAuth, tripsController.tripsUpdateTrip)
  .delete(requireAuth, tripsController.tripsDeleteTrip);
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;