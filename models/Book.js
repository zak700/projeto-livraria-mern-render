const {default: mongoose} = require('mongoose')

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    isbn:{
        type:String,
        required: true
    },
    author:{
        type:String,
        required: true
    },
    description:{
        type:String
    },
    puclished_date:{
        type:Date
    },
    publisher:{
        type:String
    },
    updated_date:{
        type:String,
        default: Date.now
    }
});

module.exports = book = mongoose.model('book', bookSchema);