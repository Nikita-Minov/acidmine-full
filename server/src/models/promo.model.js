const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  promocode: String,
  percent: Number,
});

module.exports = mongoose.model('Promo', userSchema);