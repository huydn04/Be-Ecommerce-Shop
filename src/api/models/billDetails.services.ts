import { IBillDetails } from './../types/billDetails.dto';
import { Schema } from 'mongoose';
import mongoose from 'mongoose';


const billDetailsSchema = new Schema<IBillDetails>({
    _id: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    price_sale: { type: Number, required: true },
    createdAt:{
        type: Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})

const BillDetails = mongoose.model<IBillDetails>("BillDetails",billDetailsSchema )
export  {BillDetails}