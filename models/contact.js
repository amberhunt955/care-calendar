const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const events = require('./event');

const contactSchema = new Schema({
    name: {type: String},
    phone: {type: Number},
    email: {type: String},
    address: {type: String},
    events: [events]
},
{
    timestamps: true
})

module.exports = mongoose.model("Contact", contactSchema);