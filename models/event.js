const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
require('./category');

const eventSchema = require('./eventSchema')

module.exports = mongoose.model("Event", eventSchema);