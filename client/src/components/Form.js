import React from "react";

const Form = ({ heading, value, onChange, buttonTitle, onSubmit }) => {
  const { handleAuthorChange, handleTitleChange, handlePriceChange } = onChange;
  const { author, title, price } = value;

  return (
    <>
      <form className="mt-5" onSubmit={onSubmit}>
        <h1>{heading}</h1>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="title"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className="modal-footer">
          <button type="submit" className="btn btn-primary ">
            {buttonTitle}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
