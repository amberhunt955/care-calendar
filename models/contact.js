const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = require('./eventSchema');

const contactSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    name: {type: String},
    phone: {type: Number},
    email: {type: String},
    address: {type: String},
    events: [eventSchema]
},
{
    timestamps: true
})

module.exports = mongoose.model("Contact", contactSchema);