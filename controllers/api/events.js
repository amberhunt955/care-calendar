const Event = require('../../models/event');
const jwt = require('jsonwebtoken');

function createJWT(event) {
    return jwt.sign({event}, process.env.SECRET, {expiresIn: '24h'});
}

async function create(req, res) {
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

module.exports = { create }