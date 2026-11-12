const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET: Retrieve list of all trips
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({}).exec();
        if (!trips || trips.length === 0) {
            return res.status(444).json({ message: "Trips not found" });
        }
        return res.status(200).json(trips);
    } catch (err) {
        return res.status(500).json(err);
    }
};

// GET: Retrieve a single trip by tripCode
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({
            code: req.params.tripCode
        }).exec();

        if (!trip) {
            return res.status(404).json({
                message: "Trip not found"
            });
        }

        return res.status(200).json(trip);
    } catch (err) {
        return res.status(500).json(err);
    }
};

// POST: Add a new trip
const tripsAddTrip = async (req, res) => {
    try {
        const newTrip = await Trip.create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });
        return res.status(201).json(newTrip);
    } catch (err) {
        return res.status(400).json(err);
    }
};

// PUT: Update an existing trip
const tripsUpdateTrip = async (req, res) => {
    try {
        const updatedTrip = await Trip.findOneAndUpdate(
            { 'code': req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
            { new: true }
        ).exec();

        if (!updatedTrip) {
            return res.status(404).json({ message: "Trip not found with code " + req.params.tripCode });
        }
        return res.status(200).json(updatedTrip);
    } catch (err) {
        return res.status(500).json(err);
    }
};

// DELETE: Remove a trip
const tripsDeleteTrip = async (req, res) => {
    try {
        const deletedTrip = await Trip.findOneAndDelete({ 'code': req.params.tripCode }).exec();
        if (!deletedTrip) {
            return res.status(404).json({ message: "Trip not found with code " + req.params.tripCode });
        }
        return res.status(200).json({ message: "Trip deleted successfully" });
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};