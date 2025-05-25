const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model('Rental', rentalSchema);
