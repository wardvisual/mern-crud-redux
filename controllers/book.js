const BookModel = require("../models/Book");

const createBook = async (author, title, price) => {
  try {
    await BookModel.insertMany({ author, title, price });
    return true;
  } catch {
    return false;
  }
};

const retrieveBook = async () => {
  try {
    const response = await BookModel.find({});
    return response;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const updateBook = async (_id, set) => {
  try {
    await BookModel.updateOne({ _id }, { $set: set });
    return true;
  } catch {
    return false;
  }
};

const deleteBookById = async (_id) => {
  try {
    await BookModel.deleteOne({ _id });
    return true;
  } catch {
    return false;
  }
};

module.exports = { createBook, retrieveBook, updateBook, deleteBookById };
