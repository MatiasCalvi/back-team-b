const mongoose =  require('mongoose')

const Schema = new mongoose.Schema({
    name: {type: String, required: true},
    photo: {type: Object, required: true},
    capacity: {type: Number, required: true},
    cityId:{type: mongoose.Types.ObjectId, ref: "cities", required: true},
    userId:{type: mongoose.Types.ObjectId, ref: "users", required: true},
})

const Hotel = mongoose.model('hotels',Schema)

module.exports = Hotel