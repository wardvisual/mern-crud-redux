import React, { useState, useEffect } from "react";
import Form from "./Form";
import { useSelector } from "react-redux";

const UpdateModal = ({ handleOnUpdateBook, _id }) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const { books } = useSelector((state) => state.book);
  const [echoDataToModal, setEchoDataToModal] = useState({});

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
    handleOnUpdateBook({ author, title, price });
  };

  const echoDataToForm = () => {
    const selectedBook = books.find((book) => book._id === _id);
    if (selectedBook) {
      setEchoDataToModal(selectedBook);
      console.log("Echo: ", selectedBook);
    }
  }; // Not active at DOM

  useEffect(() => {
    echoDataToForm();
  }, [handleOnUpdateBook]);
  return (
    <>
      <div
        className="modal fade"
        id="UpdateModal"
        tabIndex="-1"
        aria-labelledby="UpdateModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="UpdateModalLabel">
                Update Book
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Form
                buttonTitle="Update"
                value={newBook}
                echoDataToModal={echoDataToModal}
                onChange={handleOnChange}
                onSubmit={handleOnSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
