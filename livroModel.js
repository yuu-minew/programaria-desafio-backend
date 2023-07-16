const mongoose = require("mongoose")

const LivroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        require: true
    },
    category: {
        type: String,
        required: true
    },
    num_pages: {
        type: Number,
        required: true
    },
    deluxe: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('book', LivroSchema)