const Contact = require('../../models/contact');
const jwt = require('jsonwebtoken');

function createJWT(contact) {
    return jwt.sign({contact}, process.env.SECRET, {expiresIn: '24h'});
}

async function create(req, res) {
    try {
        // create a new contact
        const contact = await Contact.create(req.body);
        console.log(contact);

        // create a new jwt
        const token = createJWT(contact);
        res.json(token);
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

module.exports = { create }