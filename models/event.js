const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {type: String},
    month: {type: String},
    day: {type: Number},
    person: {type: String},
    contact:
    {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Contact'
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("Event", eventSchema);