const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const MySchema = new Schema({
    custpartcharg:{},
    productlifcyclemgmt: {},
    callcenter:{},
    common_op_maint:{},
    
    });

module.exports =  mongoose.model('rmArch', MySchema, 'RevenuemanagerArch')

