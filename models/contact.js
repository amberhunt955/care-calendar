const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    name: {type: String},
    phone: {type: Number},
    email: {type: String},
    address: {type: String},
    events: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Event",
    }]
},
{
    timestamps: true
})

module.exports = mongoose.model("Contact", contactSchema);