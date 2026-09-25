const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Connect to Mongoose DB Access Module
require('./db');
const Trip = mongoose.model('trips');

// Read JSON File
const trips = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../../trips.json'), 'utf-8')
);

// Seed function
const seedDB = async () => {
    try {
        await Trip.deleteMany({});
        await Trip.insertMany(trips);
        console.log('Database populated successfully with trip data!');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        mongoose.connection.close();
    }
};

seedDB();