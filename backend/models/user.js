
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
const userSchema = new mongoose.Schema({
    user_id : {type : String , default : uuidv4()},
    first_name : {type : String , required: [true , 'Please enter First Name']},
    last_name : {type :String , required : [true, 'Please enter Last Name']},
    email : {type : String , trim : true, lowercase : true},
    password : {type : String , required : true},
    user_type : {type : String, enum : ['buyer' , 'seller']},
    isActive : {type : Boolean , default : true},
    wallet_balance : {type: Number , default : 0},
    createdAt: Date,
    updatedAt: Date
}, {timeStamps : true})

export const User = mongoose.model('User' , userSchema);

