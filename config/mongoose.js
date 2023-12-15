const mongoose = require('mongoose');


const uri = "mongodb+srv://whiteWolff:praduman@cluster0.an8uy3k.mongodb.net/habittTracker?retryWrites=true&w=majority";

mongoose.connect(uri).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;