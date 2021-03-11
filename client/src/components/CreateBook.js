import React, { useState } from "react";
import Form from "./Form";

const CreateBook = ({ handleOnGetBook }) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);

  const newBook = { author, title, price };
  const handleOnChange = {
    handleAuthorChange,
    handleTitleChange,
    handlePriceChange,
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnGetBook(author, title, price);
  };

  return (
    <>
      <Form
        heading="Create Book"
        value={newBook}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
        buttonTitle="Save Book"
      />
    </>
  );
};

export default CreateBook;
