const mongoose = require('mongoose')


const linkSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    click:Number,

})

module.exports = mongoose.model('Link', linkSchema)