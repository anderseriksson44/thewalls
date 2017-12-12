const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const MySchema = new Schema({

    name: String,
    desc: String
    }, {collection: 'test'});

const test =  mongoose.model('test', MySchema, 'test')

// const q = new test({name: "gurra"})
// q.save(function (err){
//     if (err) return handleError(err);

// })

//     q.find({}, function(err,res) {
//     console.log(res)
// })

module.exports = test;