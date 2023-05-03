const Contact = require("../../models/contact");
const Event = require("../../models/event");
const jwt = require("jsonwebtoken");

//? HELPER FUNCTION
function createJWT(contact) {
  return jwt.sign({ contact }, process.env.SECRET, { expiresIn: "24h" });
}

//* CREATE A NEW CONTACT
async function createContact(req, res) {
  try {
    // create a new contact
    const contact = await Contact.create(req.body);
    // create a new jwt
    const token = createJWT(contact);
    res.json(token);
  } catch (error) {
    res.status(400).json(error);
  }
}

//* GET ALL CONTACTS FOR LOGGED IN USER
async function getAllContacts(req, res) {
  try {
    const contacts = await Contact.find({ contact: req.user._id });
    res.status(200).json(contacts);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

//* FIND ONE CONTACT BY ID
async function findContact(req, res) {
  console.log("HELLO FROM CONTROLLER FIND CONTACT");
  console.log(req.params.contactId);
  try {
    const contact = await Contact.findById(req.params.contactId).exec();
    console.log(contact);
    res.json(contact);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

//* UPDATE DESIGNATED CONTACT
async function updateContact(req, res) {
  console.log("HELLO FROM UPDATE CONTACT CONTROLLER FUNCTION");
  console.log(req.params.id);
  console.log(req.body);
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!contact) {
      return res.status(404).json({ msg: "Contact not found" });
    }
    res.json(contact);
  } catch (error) {
    console.error(error)
    res.status(500).send("Server Error");
  }
}

//* DELETE DESIGNATED CONTACT
async function deleteContact(req, res) {
  try {
    const contact = await Contact.findByIdAndRemove(req.params.id);
    res.json(contact);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

//* ADD EVENT TO CONTACT
async function addEventToContact(req, res) {
  try {
    const contact = await Contact.findById(req.params.contactId);
    const event = await Event.findById(req.params.eventId);
    contact.events.push(event)
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

module.exports = {
  createContact,
  getAllContacts,
  findContact,
  updateContact,
  deleteContact,
  addEventToContact,
};
