import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const concertSchema = new Schema({
  sections: [{ type: mongoose.Schema.ObjectId, ref: 'Section' }],
});

module.exports = mongoose.model('Concert', concertSchema);
