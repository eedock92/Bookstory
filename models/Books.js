const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({

    title : {
        type : String,
        required : true,
        trim : true 
    },

    author : {
        type : String,
    },

    class : {
        type : String,
        default : '소설',
        required : true
    },

    body : {
        type : String,
        required : true
    },

    image : {
        type : String,

    },
    createdAt : {
        type : Date,
        default : Date.now


    }


})

module.exports = mongoose.model('Books', BookSchema)