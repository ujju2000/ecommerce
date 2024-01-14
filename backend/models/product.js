import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

 const productCategorySchema = new mongoose.Schema({
    category_id : Number,
    category_display_name : String,
    is_Active : Boolean,
    createdAt : Date,
    updatedAt : Date
} , {timestamps : true})

export const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);

 const productSchema = mongoose.Schema({
    product_id : {type : String , default : uuidv4()},
    is_Active : Boolean,
    title : String, 
    description : String ,
    stock_count : Number,
    price : Number,
    selling_price : Number,
    createdAt: Date,
    // updatedAt : Date,
    // created_by : String , 
    category_id : String,
    product_metadata : {type : String, default : null}
} , {timestamps : true})

export const Product = mongoose.model('Product', productSchema);
