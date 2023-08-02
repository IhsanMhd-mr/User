
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    id:{
        type : String,
        required:true,
    },
    phone:{
        type: String
    },
    created:{
        type:Date,
        required: true,
        default:Date.now,
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;