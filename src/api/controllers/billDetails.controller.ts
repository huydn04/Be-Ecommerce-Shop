import { RequestHandler } from "express";
import { BillDetails } from "../models/billDetails.services";

//get all billDetails

const getBillDetails: RequestHandler = async (req, res) => {
  try {
    const billDetails = await BillDetails.find();
    res.status(200).json(billDetails);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//post billDetails

const postBillDetails: RequestHandler = async (req, res) => {
  const newBillDetails = req.body;
  try {
    const result = await BillDetails.create(newBillDetails);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//deleted billDetails

const deleteBillDetails: RequestHandler = async (req, res) => {
  const billDetailsId = req.params.id;
  try {
    const deleteItemsBillDetailsId = await BillDetails.findByIdAndDelete(
      billDetailsId
    );
    if (!deleteItemsBillDetailsId) {
      return res.status(404).json({ message: "Không tìm thấy items" });
    }
    res.status(200).json({ message: "xóa items thành công " });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//updated billDetails

const updateBillDetails: RequestHandler = async (req, res) => {
  const billDetailsId = req.params.id;
  const { _id, quantity, price, price_sale } = req.body;
  try {
    const updatedItemsBillDetails = await BillDetails.findByIdAndUpdate(
      billDetailsId,
      {
        _id,
        quantity,
        price,
        price_sale,
      }
    );
    if (!updatedItemsBillDetails) {
      res.status(404).json({ message: "Không tìm thấy items" });
    }
    res.status(200).json(updatedItemsBillDetails);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//single billDetails

const singleBillDetails: RequestHandler = async (req, res) => {
  const billDetailsId = req.params.id;
  try {
    if (!billDetailsId) {
      res.status(404).json({ message: "Không tìm thấy id" });
    }
    const findBillDetailsSingle = await BillDetails.findById(billDetailsId);
    res.status(200).json(findBillDetailsSingle);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getBillDetails,
  postBillDetails,
  deleteBillDetails,
  updateBillDetails,
  singleBillDetails,
};
