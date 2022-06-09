import  Product  from "../models/Product";

export const createProduct = async (req, res) => {
    const {name, category, price, imgURL} = req.body

    const newProduct = new Product({name, category, price, imgURL})
    const productSaved = await newProduct.save()

    res.status(201).json(productSaved)
}



export const getProducts = async (req, res) =>{
    const products = await Product.find({}).lean()
    res.status(201).json(products)
}

export const getProductById = async (req, res) =>{
    const product = await Product.findById(req.params.productId)
    if(!product){
        res.status(404).json({message: "Not found"})
    }else{
        res.status(200).json(product)
    }
}

export const updateProductById = async (req, res) =>{
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true, 
    })
    if(!updatedProduct){
        res.status(404).json({message: "Not found"})
    }else{
        res.status(200).json(updatedProduct)
    }

}

export const deleteProductById = async (req, res) =>{
    const deleteProduct = await Product.findByIdAndDelete(req.params.productId)
    if(!!deleteProduct){
        res.status(204).json(deleteProduct)
    }else{
        res.status(404).json({message: "Not found"})
    }
}
 