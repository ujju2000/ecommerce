import express from 'express';
import { Product } from '../models/product.js';
import { Purchase } from '../models/purchase.js';

const router = express.Router();

router.post('/logIn' , async (req,res) => {
    const {email , password} = req.body;
    try {
        const user = await User.findOne({email});
        if(user) {
            if(user.password === password) {
                return res.status(200).json({user});
            }
            else {
                return res.status(404).json({error : 'Invalid username or password'});
            }
        }
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({message  :'Internal server Error'});
    }
})

router.post('/signIn', (req,res) => {

})

router.post('/signIn' , (req,res) => {

})
router.get('/wallet/details', (req,res) => {
    const {wallet_balance} = req.body;

    return res.status(200).json({
        success: true,
        balance : wallet_balance
    })
})

router.get('/products' , async (req,res) => {

    try{
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        
        return res.status(200).json({result});
    }
    catch(err) {
        return res.status(401).json({message : 'Interval Server Error'});
    }
})

router.post('/purchasing-transcation' , async (req,res) => {
    try {
        const {productId , quantity} = req.body;
        // const buyerId = req.user._id;
        const product = await Product.find({productId});

        if(!product) {
            return res.status(404).json({error : 'Product do not found or not active'});
        }

        if(product.stock_count < quantity) {
            return res.status(400).json({error : 'Insufficient stock for the reputated quantity'});
        }

        const purchase = new Purchase({
            buyer : buyerId,
            product : productId ,
            quantity ,
            total_amount : product.price * quantity
        })

        product.stock_count -= quantity;
        await product.save();

        await purchase.save();

        res.status(200).json({message : 'Purchase successfull' , purchase});
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({error: 'Internal Server Error'});
    }
})

router.get('/purchases' , async (req, res) => {
    try {
        const purchases = await Purchase.find({transcation_status : { $in : ['pending' , 'completed' , 'failure']}});

        res.status(200).json(purchases);

    }
    catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
export default router;