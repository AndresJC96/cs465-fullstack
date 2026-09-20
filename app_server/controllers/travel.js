const fs = require('fs');
const path = require('path');

// Read JSON data file
const tripsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../data/trips.json'), 'utf8')
);

/* GET travel view */
const travel = (req, res) => {
  res.render('travel', { 
    title: 'Travlr Getaways - Travel', 
    trips: tripsData 
  });
};

module.exports = {
  travel
};