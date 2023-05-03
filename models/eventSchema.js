const event = require('./event');
const Schema = require('mongoose').Schema;

const eventSchema = new Schema({
    name: {type: String},
    month: {type: String},
    day: {type: Number},
    category: { type: Schema.Types.ObjectId, ref: 'Category' }
}, {
    timestamps: true
});

module.exports = eventSchema;