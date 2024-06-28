import { RequestHandler } from "express";
import { Categories } from "../models/categories.services";

//get all categories

const getAllCategories: RequestHandler = async (req, res) => {
  try {
    const categories = await Categories.find();
    res.status(200).json(categories);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//post categories

const postCategories: RequestHandler = async (req, res) => {
  const newCategories = req.body;
  try {
    const result = await Categories.create(newCategories);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//deleted categories

const deleteCategories: RequestHandler = async (req, res) => {
  const categoriesId = req.params.id;
  try {
    const deleteItemsCategories = await Categories.findByIdAndDelete(
      categoriesId
    );
    if (!deleteItemsCategories) {
      return res.status(404).json({ message: "Không tìm thấy items" });
    }
    res.status(200).json({ message: "xóa items thành công " });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//updated categories

const updateCategories: RequestHandler = async (req, res) => {
  const categoriesId = req.params.id;
  const { _id, name, image } = req.body;
  try {
    const updatedItemsCategories = await Categories.findByIdAndUpdate(
      categoriesId,
      {
        _id,
        name,
        image,
      }
    );
    if (!updatedItemsCategories) {
      res.status(404).json({ message: "Không tìm thấy items" });
    }
    res.status(200).json(updatedItemsCategories);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//single categories

const singleCategories: RequestHandler = async (req, res) => {
  const categoriesId = req.params.id;
  try {
    if (!categoriesId) {
      res.status(404).json({ message: "Không tìm thấy id" });
    }
    const findCategoriesSingle = await Categories.findById(categoriesId);
    res.status(200).json(findCategoriesSingle);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllCategories,
  postCategories,
  deleteCategories,
  updateCategories,
  singleCategories,
};
