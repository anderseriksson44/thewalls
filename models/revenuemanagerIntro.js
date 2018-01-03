const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const MySchema = new Schema({
    title:{},
    heading: {},
    image: {},
    sub_text1:{},
    sub_text2:{},
    
    });

module.exports =  mongoose.model('rmintro', MySchema, 'RevenuemanagerIntro')