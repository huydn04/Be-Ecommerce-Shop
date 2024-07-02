import { RequestHandler } from 'express'
import Product from '../models/product.services'

//get all product

const getAllProduct: RequestHandler = async (req, res) => {
  try {
    const product = await Product.find()
    res.status(200).json({data:product,status:200})
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

//post product

const postProduct: RequestHandler = async (req, res) => {
  const newProduct = req.body
  try {
    const result = await Product.create(newProduct)
    res.status(200).json({data:result,status:200})
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

//deleted product

const deleteProduct: RequestHandler = async (req, res) => {
  const productId = req.params.id
  try {
    const deleteItemsProduct= await Product.findByIdAndDelete(productId)
    if (!deleteItemsProduct) {
      return res.status(404).json({ message: 'Không tìm thấy items' })
    }
    res.status(200).json({ message: 'xóa items thành công ' })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

//updated product

const updateProduct: RequestHandler = async (req, res) => {
  const productId = req.params.id
  const { _id, name, address, email, phone_number, open_hour, open_minutes, close_hour, close_minutes } = req.body
  try {
    const updatedItemsProduct = await Product.findByIdAndUpdate(productId, {
      _id,
      name,
      address,
      email,
      phone_number,
      open_hour,
      open_minutes,
      close_hour,
      close_minutes
    })
    if (!updatedItemsProduct) {
      res.status(404).json({ message: 'Không tìm thấy items' })
    }
    res.status(200).json({data:updatedItemsProduct,status:200})
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

//single product

const singleProduct: RequestHandler = async (req, res) => {
  const productId = req.params.id
  try {
    if (!productId) {
      res.status(404).json({ message: 'Không tìm thấy id' })
    }
    const ProductSingle = await Product.findById(productId)
    res.status(200).json({data:ProductSingle,status:200})
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export { getAllProduct, postProduct, deleteProduct, updateProduct, singleProduct }
