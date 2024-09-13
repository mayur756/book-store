
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    title: String,
    author: String,
    category: String,
    publicationYear: Number,
    price: Number,
    quantity: Number,
    description: String,
    profile: String,
})

const User = mongoose.model("user", userSchema)

module.exports = User;