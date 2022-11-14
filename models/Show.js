const mongoose =  require('mongoose')

const Schema = new mongoose.Schema({
    hotelId: {type: mongoose.Types.ObjectId, ref: "hotels", required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    photo: {type: String, required: true},
    price: {type: Number, required: true},
    date: {type: Date,  required: true},
    userId: {type: mongoose.Types.ObjectId, ref: "users", required: true},
})

const Show = mongoose.model('show',Schema)

module.exports = Show