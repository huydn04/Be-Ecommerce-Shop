import { RequestHandler } from "express";
import { Bill } from "../models/bill.services";

//get all Bill

const getAllBill: RequestHandler = async (req, res) => {
  try {
    const bill = await Bill.find();
    res.status(200).json({data:bill,status:200});
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//post Bill

const postBill: RequestHandler = async (req, res) => {
  const newBill = req.body;
  try {
    const result = await Bill.create(newBill);
    res.status(200).json({data:result,status:200});
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//deleted Bill

const deleteBill: RequestHandler = async (req, res) => {
  const billId = req.params.id;
  try {
    const deleteItemsBill = await Bill.findByIdAndDelete(billId);
    if (!deleteItemsBill) {
      return res.status(404).json({ message: "Không tìm thấy items" });
    }
    res.status(200).json({ message: "xóa items thành công " });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//updated Bill

const updateBill: RequestHandler = async (req, res) => {
  const billId = req.params.id;
  const {
    _id,
    code_orders,
    name,
    order_notes,
    email,
    total_payment,
    total_payment_sale,
    status,
    phone,
    payment_methods,
    address,
    voucher,
  } = req.body;
  try {
    const updatedItemsBill = await Bill.findByIdAndUpdate(billId, {
      _id,
      code_orders,
      name,
      order_notes,
      email,
      total_payment,
      total_payment_sale,
      status,
      phone,
      payment_methods,
      address,
      voucher,
    });
    if (!updatedItemsBill) {
      res.status(404).json({ message: "Không tìm thấy items" });
    }
    res.status(200).json({data:updatedItemsBill,status:200});
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//single Bill

const singleBill: RequestHandler = async (req, res) => {
  const billId = req.params.id;
  try {
    if (!billId) {
      res.status(404).json({ message: "Không tìm thấy id" });
    }
    const findBillSingle = await Bill.findById(billId);
    res.status(200).json({data:findBillSingle,status:200});
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllBill, postBill, deleteBill, updateBill, singleBill };
