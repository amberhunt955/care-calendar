const Event = require('../../models/event');
const jwt = require('jsonwebtoken');

//? HELPER FUNCTION
function createJWT(event) {
    return jwt.sign({event}, process.env.SECRET, {expiresIn: '24h'});
}

//* CREATE A NEW EVENT
async function createEvent(req, res) {
    try {
        // create a new event
        const event = await Event.create(req.body);
        console.log(event);
        // create a new jwt
        const token = createJWT(event);
        res.json(token);
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

//* GET ALL EVENTS FOR LOGGED IN USER
async function getAllEvents(req, res) {
    try {
      const events = await Event.find({ event: req.user._id });
      res.status(200).json(events);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  }

module.exports = { createEvent, getAllEvents }