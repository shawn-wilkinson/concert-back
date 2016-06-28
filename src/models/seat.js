import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const seatSchema = new Schema({
  number: Number,
  isSold: { type: Boolean, default: false },
});

module.exports = mongoose.model('Seat', seatSchema);
