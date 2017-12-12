const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const MySchema = new Schema({
    productmanager:{},
    programmanager: {},
    developer:{}
    });

module.exports =  mongoose.model('rmRoles', MySchema, 'RevenuemanagerRoles')