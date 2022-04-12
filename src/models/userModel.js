const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    isbn: {
        type: Number,
        unique: true,
        required: true
    },
    category: {
        type: String,
        enum: ["novel", "comic", "fairytale","study", "adventure", "drama", "poem","general"] 
    },
}, { timestamps: true });

module.exports = mongoose.model('User', bookSchema) 