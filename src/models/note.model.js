const mongoose = require('mongoose')
const noteSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String, 
    role: String, 
    bloodgroup: String,
    phone: String,
    location: String,
    isverified: Boolean,
    availablity: Boolean,
    donationcount: Number
})
const noteModel = mongoose.model('note', noteSchema)

module.exports = noteModel