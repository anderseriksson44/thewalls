const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const MySchema = new Schema({
    fiveG: {},
    invoicing: {},
    charging:{},
    cloud:{},
    iot: {}
    });

module.exports =  mongoose.model('rmUC', MySchema, 'RevenuemanagerUC')

