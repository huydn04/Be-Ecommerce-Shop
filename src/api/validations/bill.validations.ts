import enumStatus from "../../../src/"

export interface IBill {
  _id: string
  code_orders: string
  name: string
  order_notes: string
  email:string
  total_payment:number
  total_payment_sale:number
  status: enumStatus



}
