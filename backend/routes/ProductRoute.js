import express from 'express';


const router = express.Router();


router.get('/' , async (req,res) => {
    const result = await Product.find({});
    return res.status(200).json({
        products : result.map(prod => prod.JSON()) 
    })
})
