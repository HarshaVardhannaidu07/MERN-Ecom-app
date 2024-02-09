import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";


//@desc fetch all products
//@route GET/api/products
//@acces Public
const getProducts = asyncHandler(async(req,res) => {

        const products = await Product.find({});
        res.json(products);
});

//@desc Fetch a product 
//@ GET/api/product/:id
//@access Public
const getProductByID = asyncHandler(async(req,res) => {

    const product = await Product.findById(req.params.id)
    if(product){
       return res.json(product);
    }
    else{
        res.status(404);
        throw new Error('Resource not found');
    }
});

export {getProducts,getProductByID};