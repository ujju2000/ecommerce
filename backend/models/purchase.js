import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const purchaseSchema = new mongoose.Schema({
    TID : {type : String  },
    original_transcation_id : String , 
    amount : Number, 
    createdAt : Date,
    updatedAt : Date,
    product_id : String , 
    purchased_by : String, 
    transcation_type : {type: String , enum : ['refund' , 'purchase']},
    transcation_status: {type : String , enum : ['pending' , 'completed' , 'failure']},
    payment_purchased_id : {type: String , default : uuidv4()},
    payment_method : {type : String, enum  : ['cash' , 'wallet' , 'card/netbanking/UPI']}
} , {timestamps : true})


export const Purchase = mongoose.model('Purchase' , purchaseSchema);