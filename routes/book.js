const router = require("express").Router();
const { create, retrieve, deleteBook, update } = require("../middleware/book");

router.route("/create").post(create);

router.route("/retrieve").get(retrieve);

router.route("/delete").delete(deleteBook);

router.route("/update").put(update);

module.exports = router;
