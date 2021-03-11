const {
  createBook,
  deleteBookById,
  retrieveBook,
  updateBook,
} = require("../controllers/book");

exports.create = async (req, res) => {
  const { author, title, price } = req.body;

  const result = await createBook(author, title, price);
  result
    ? res.json({
        result,
        message: "Created Successfully.",
      })
    : res.json({
        result,
        message: "There were an error.",
      });
};

exports.retrieve = async (req, res) => {
  //   const { _id } = req.body;

  const result = await retrieveBook();
  result
    ? res.json({
        result,
        message: "Retrieved Successfully.",
      })
    : res.json({
        result,
        message: "There were an error.",
      });
};

exports.update = async (req, res) => {
  const { _id, set } = req.body;

  const result = await updateBook(_id, set);
  result
    ? res.json({
        result,
        message: "Updated Successfully.",
      })
    : res.json({
        result,
        message: "There were an error.",
      });
};

exports.deleteBook = async (req, res) => {
  const { _id } = req.query;

  const result = await deleteBookById(_id);
  result
    ? res.json({
        result,
        message: "Deleted Successfully.",
      })
    : res.json({
        result,
        message: "There were an error.",
      });
};
