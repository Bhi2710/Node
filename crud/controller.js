const Product = require("./database")

exports.getAllProduct = async (req,res)=>{
    const productList = await Product.find()
    res.status(200).json(productList)
}

exports.createProduct = async (req,res)=>{
    const data = req.body
    const product = new Product(data)
    await product.save()
    res.status(200).json(product)
}




