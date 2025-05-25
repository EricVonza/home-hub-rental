const Rental = require('../models/Rental');

exports.createRental = async (req, res) => {
  try {
    const rental = new Rental({ ...req.body, owner: req.user.id });
    await rental.save();
    res.status(201).json(rental);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getAllRentals = async (req, res) => {
  const rentals = await Rental.find().populate('owner', 'name email');
  res.json(rentals);
};
