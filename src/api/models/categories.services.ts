import { ICategories } from './../types/categories.dto';
import mongoose, { Schema } from 'mongoose'


const categoriesSchema = new Schema<ICategories>({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  image:{type: String, required:true},
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

const Categories = mongoose.model<ICategories>('Categories', categoriesSchema)

export { Categories }
