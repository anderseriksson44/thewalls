const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const MySchema = new Schema({
            floor: [
                {
                    name: String,
                    room: []
                }
            ]
            
});
module.exports =  mongoose.model('rmlocation', MySchema, 'SiteKAFloors')