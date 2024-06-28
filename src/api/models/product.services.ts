import { IProduct } from './../types/product.dto';
import { Schema } from "mongoose";
import mongoose from "mongoose";


const productSchema = new Schema<IProduct>({
    _id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  price_sale: { type: Number, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  favourite: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

const Product = mongoose.model<IProduct>("Product",productSchema)
export default Product