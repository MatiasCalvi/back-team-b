const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    showId: { type: mongoose.Types.ObjectId, ref: "shows", required: true},
    userId: {type: mongoose.Types.ObjectId, ref: "users", required: true},
    date: {type: Date,  required: true},
    comment: { type: String, required: true },
    photo:{type: String, required: false},

});
const  comment = mongoose.model("comment", schema);

module.exports = comment;
