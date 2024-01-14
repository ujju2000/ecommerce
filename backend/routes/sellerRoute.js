import express from 'express';
import { Product } from '../models/product.js';
import { Purchase } from '../models/purchase.js';

const router = express.Router();


router.get('/products' , async (req,res) => {
    try { 
        const products =  await Product.find({created_by : req.user._id});
        res.json({products});

    }
    catch(error) {
        console.error(error);
        res.status(500).json({error : 'Internal Server Error'});
    }
})


router.post('/products' , async (req,res) => {
    try {
        const {title , description , stock_count ,price, selling_price , category_id} = req.body;
        const createdBy = req.user._id;

        const newProduct = new Product({
            title , description , stock_count , price, selling_price , created_by : createdBy , category_id
        })

        await newProduct.save();

        return res.status(201).json({Product: newProduct});
    }
    catch(err) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.patch('/products/:productId' , async (req,res) => {
    try {
        const {productId} = req.params;
        const {title, description , stock_count , price, selling_price , category_id } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            {
                title , description , stock_count , price , selling_price , category_id
            } ,
            {new : true}
        )

        return res.status(200).json({product : updatedProduct});


    }
    catch(err) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// router.put() => if necessary we will write this down 

router.delete('/products/:productId', async (req,res) => {
    try {
        const {productId } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(productId);

        res.status(200).json({message : 'Product deleted successfully',product : deletedProduct});
    }
    catch(err) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// router.get('/top-products')
router.get('/purchases' , async (req,res) => {
    try {
        const sellerId = req.user._id;
        
        const sellerPurchase = await Purchase.find({purchased_by : sellerId});

        return res.status(200).json({sellerPurchase});
    }
    
    catch(err) {    
        console.error(err);
        return res.status(500).json({error : 'Internal Server Error'});
    }
})

export default router;