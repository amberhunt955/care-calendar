const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {type: String},
    month: {type: String},
    day: {type: Number},
    contact: {type: String}
}, {
    timestamps: true
});

module.exports = mongoose.model("Event", eventSchema);