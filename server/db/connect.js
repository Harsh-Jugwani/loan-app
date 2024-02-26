const mongoose = require('mongoose');

const connectDB = ()=>{
    console.log("connection made");
    return mongoose.connect('mongodb+srv://hjugwani:U2ch0HXwY5qtNyse@cluster0.1knbwpr.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0')
}
module.exports = connectDB