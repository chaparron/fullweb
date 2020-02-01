const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    visibility: { type: String, default: "public"},
    author: { type: String},
    date: { type: Date, default: Date.now}
})

module.exports = mongoose.model('Note', NoteSchema)