const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const MySchema = new Schema({
    title:{},
    heading: {},
    sub_text1:{},
    sub_text2t:{},
    
    });

module.exports =  mongoose.model('rmintro', MySchema, 'RevenuemanagerIntro')