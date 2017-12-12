const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const MySchema = new Schema({
    customermanagement:{},
    rating: {},
    bonus:{},
    policy:{},
    usercom:{},
    prodcreate:{}
    });

module.exports =  mongoose.model('how', MySchema, 'ChargingsystemHow')
