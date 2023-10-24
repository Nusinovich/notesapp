const mongoose = require('mongoose')

const notesSchema  = new mongoose.Schema({
    email: {type: String, requred: true},
    title: {type: String, requred: true},
    description: {type: String, requred: true}
}, {timestamps: true})

module.exports = mongoose.model('Note', notesSchema)