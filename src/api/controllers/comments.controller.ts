import { RequestHandler } from "express";
import { Comments } from "../models/comments.services";

//get all comments

const getAllComments: RequestHandler = async (req, res) => {
  try {
    const comments = await Comments.find();
    res.status(200).json({data:comments,status:200});
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//post comments

const postComments: RequestHandler = async (req, res) => {
  const newComments = req.body;
  try {
    const result = await Comments.create(newComments);
    res.status(200).json({data:result,status:200});
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//deleted comments

const deleteComments: RequestHandler = async (req, res) => {
  const commentsId = req.params.id;
  try {
    const deleteItemsComments = await Comments.findByIdAndDelete(commentsId);
    if (!deleteItemsComments) {
      return res.status(404).json({ message: "Không tìm thấy items" });
    }
    res.status(200).json({ message: "xóa items thành công " });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//updated comments

const updateComments: RequestHandler = async (req, res) => {
  const CommentsId = req.params.id;
  const { _id, comments } = req.body;
  try {
    const updatedItemsComments = await Comments.findByIdAndUpdate(CommentsId, {
      _id,
      comments,
    });
    if (!updatedItemsComments) {
      res.status(404).json({ message: "Không tìm thấy items" });
    }
    res.status(200).json({data:updatedItemsComments,status:200});
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//single comments

const singleComments: RequestHandler = async (req, res) => {
  const commentsId = req.params.id;
  try {
    if (!commentsId) {
      res.status(404).json({ message: "Không tìm thấy id" });
    }
    const findCommentsIdSingle = await Comments.findById(commentsId);
    res.status(200).json({data:findCommentsIdSingle,status:200});
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllComments,
  postComments,
  deleteComments,
  updateComments,
  singleComments,
};
