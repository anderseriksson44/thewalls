const mongoose = require("mongoose");

const url ="mongodb://localhost:27017/thewalls";

// To hide warning message about promise
mongoose.Promise = global.Promise;

//Connect Mongoose
mongoose.connect(url, { useMongoClient: true });

mongoose.connection.on('error', (error) => {
    console.log(error);
});
mongoose.connection.on("connected", () => {
    console.log("Database connected!");
});


module.exports = mongoose;


