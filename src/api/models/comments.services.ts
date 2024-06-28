import { IComments } from './../types/comments.dto';
import mongoose from "mongoose";
import { Schema } from "mongoose";


const commentsSchema = new Schema<IComments>({
    _id:{type:String, required:true},
    comments:{type:String,required:true},
    createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: Date.now
      }

})

const Comments = mongoose.model<IComments>("Comments",commentsSchema)
export  {Comments}