const Product=require("../models/product.model")

const getProducts=async(req,res) =>{
    const products= await Product.find({});
    res.status(200).json(products); 
}

const getProduct=async(req,res)=>{
    const {id} = req.params
    const product  = await Product.findById(id) 
    res.status(200).json(product)
}

const createProduct=async(req,res)=>{
    const product= await Product.create(req.body);
    res.status(200).json(product);
}

const updateProduct=async(req,res)=>{
    const {id} = req.params
    await Product.findByIdAndUpdate(id, req.body) 
    const product  = await Product.findById(id)
    res.status(200).json(product) 
}

const deleteProduct=async(req,res)=>{
    const {id} = req.params
    await Product.findByIdAndDelete(id)
    return res.status(200).json({message: "product deleted successfully"})
}

module.exports={
getProducts,
getProduct,
createProduct,
updateProduct,
deleteProduct
};