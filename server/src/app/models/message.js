const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema =  new Schema({
    to: {type: Number, required: true},
    from: {type: Number, required: true, ref: 'members'},
    content: {type: String, required: true},
    media: {type: String},
    status: {type: Number}
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('messages', messageSchema);
