const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

/**
 * GET /api/trips
 * Retrieves a list of all trips from the database.
 */
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).exec();

    if (!trips || trips.length === 0) {
      return res
        .status(404)
        .json({ message: "No trips found in database" });
    }

    return res
      .status(200)
      .json(trips);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error retrieving trips", error: err });
  }
};

/**
 * GET /api/trips/:tripCode
 * Retrieves a single trip matching the requested tripCode parameter.
 */
const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.find({ 'code': req.params.tripCode }).exec();

    if (!trip || trip.length === 0) {
      return res
        .status(404)
        .json({ message: `Trip not found with code: ${req.params.tripCode}` });
    }

    return res
      .status(200)
      .json(trip);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error finding trip", error: err });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode
};