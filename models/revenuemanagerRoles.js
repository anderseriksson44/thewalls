const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const MySchema = new Schema({
    productmanager:{
        heading: {},
        description: {},
        properties: {
            img:{}
        }
    },
    programmanager: {},
    developer:{}
    });

module.exports =  mongoose.model('rmRoles', MySchema, 'RevenuemanagerRoles')