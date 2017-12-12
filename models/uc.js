const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const MySchema = new Schema({
    balance:{},
    rewards: {},
    realtimebalance:{}
    });

module.exports =  mongoose.model('uc', MySchema, 'usecase')

