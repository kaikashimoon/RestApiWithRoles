import  Product  from "../models/Product";

export const createProduct = async (req, res) => {
    try {
    const {name, category, price, imgURL} = req.body

    const newProduct = new Product({name, category, price, imgURL})
    const productSaved = await newProduct.save()

    res.status(201).json(productSaved)
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error });
    }
}



export const getProducts = async (req, res) =>{
    try {
        const products = await Product.find({}).lean()
        res.status(201).json(products)
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error });
    }
}

export const getProductById = async (req, res) =>{
   try {
    const product = await Product.findById(req.params.productId)
    if(!product){
        res.status(404).json({message: "Not found"})
    }else{
        res.status(200).json(product)
    }
   } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
   }
}

export const updateProductById = async (req, res) =>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
            new: true, 
        })
        if(!updatedProduct){
            res.status(404).json({message: "Not found"})
        }else{
            res.status(200).json(updatedProduct)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error });
    }

}

export const deleteProductById = async (req, res) =>{
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.productId)
        if(!!deleteProduct){
            res.status(204).json(deleteProduct)
        }else{
            res.status(404).json({message: "Not found"})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error });
    }
}
 