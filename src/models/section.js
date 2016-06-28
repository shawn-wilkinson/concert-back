import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  type: String,
  price: Number,
  seats: [{ type: mongoose.Schema.ObjectId, ref: 'Seat' }],
});

module.exports = mongoose.model('Section', sectionSchema);
