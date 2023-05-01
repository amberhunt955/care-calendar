const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema({
    event: {type: String},
    month: {type: Number},
    day: {type: Number},
}, {
    timestamps: true
})

module.exports = mongoose.model("Day", daySchema);