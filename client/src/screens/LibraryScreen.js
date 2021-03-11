import React from "react";
import CreateBook from "../components/CreateBook";
import BookList from "../components/BookList";
import CoverFlowImage from "../components/CoverFlowImage";
import EditBook from "../components/EditBook";

const LibraryScreen = ({
  handleOnGetBook,
  handleOnUpdateBook,
  handleOnDeleteBook,
  books,
  set_Id,
  _id,
}) => {
  return (
    <div className="container">
      <CoverFlowImage />
      <EditBook handleOnUpdateBook={handleOnUpdateBook} _id={_id} />
      <CreateBook handleOnGetBook={handleOnGetBook} />
      <BookList books={books} onDelete={handleOnDeleteBook} set_Id={set_Id} />
    </div>
  );
};

export default LibraryScreen;
