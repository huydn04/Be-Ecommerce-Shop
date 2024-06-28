import mongoose, { Schema } from "mongoose";
import { IBill } from "../types/bill.dto";
import { enumStatus } from "~/contans/enum/bill/bill";


const userSchema = new Schema<IBill>({
  _id: { type: String, required: true },
  code_orders: { type: String, required: true },
  name: { type: String, required: true },
  order_notes: { type: String, required: true },
  email: { type: String, required: true },
  total_payment: { type: Number, required: true },
  total_payment_sale: { type: Number, required: true },
  status: {type: String ,enum: [enumStatus.PENDING, enumStatus.PAID, enumStatus.CANCELLED,enumStatus.REFUNDED],required: true,},
  phone: { type: Number, required: true },
  payment_methods: { type: Number, required: true },
  address: { type: String, required: true },
  voucher: { type: String, required: true },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Bill = mongoose.model<IBill>("Bill", userSchema);
export { Bill };
