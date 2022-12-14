const mongoose =  require('mongoose')

const Schema = new mongoose.Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    photo: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String,  required: true},
    password: {type: String,  required: true},
    /* country: {type: String, required: true}, */
    role: {type: String},
    code: {type: String , required: true},
    verified: {type: Boolean},
    logged: {type: Boolean},
})

const User = mongoose.model('users',Schema)

module.exports = User