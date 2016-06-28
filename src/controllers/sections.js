/* eslint-disable new-cap */
import express from 'express';
const router = module.exports = express.Router();
import Seat from '../models/seat';
import Section from '../models/section';

router.get('/', (req, res) => {
  Section.find()
  .populate('seats')
  .exec((err, sections) => {
    console.log('Get REQUEST RECEIVED!!!', sections);
    res.send(JSON.stringify(sections));
  });
});

router.post('/', (req, res) => {
  console.log('POST REQUEST RECEIVED!!!');
  console.log(req.body);
  const section = new Section(req.body);
  section.save(() => {
    const query = { _id: section.id };
    for (let i = 0; i < req.body.numSeats; i++) {
      const seat = new Seat();
      seat.number = i + 1;
      seat.save(() => {
        Section.findOneAndUpdate(query, { $push: { seats: seat } }, () => {
          if (i === req.body.numSeats) {
            res.send(section);
          }
        });
      });
    }
  });
});
