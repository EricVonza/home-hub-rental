const express = require('express');
const { createRental, getAllRentals } = require('../controllers/rentalController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createRental);
router.get('/', getAllRentals);

module.exports = router;
