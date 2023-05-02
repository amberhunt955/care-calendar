const Contact = require("../../models/contact");
const jwt = require("jsonwebtoken");

function createJWT(contact) {
  return jwt.sign({ contact }, process.env.SECRET, { expiresIn: "24h" });
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
    res.status(400).json(error);
  }
}

async function getAllContacts(req, res) {
  try {
    const contacts = await Contact.find({ contact: req.user._id });
    console.log(contacts);
    res.status(200).json(contacts);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function deleteContact(req, res) {
    console.log("hello from controller function");
    try {
        const contact = await Contact.findByIdAndRemove(req.params.id)
        console.log(contact); 
        res.json(contact)   
    } catch (e) {
        res.status(400).json({msg: e.message});
    }
}

// async function findContact(req, res) {
//   try {
//     const contact = await Contact.findById(req.params.id);
//     res.status(200).json(contact);
//   } catch (e) {
//     res.status(400).json({ msg: e.message });
//   }
// }

module.exports = { create, getAllContacts, deleteContact };
