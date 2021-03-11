import React from "react";

const BookList = ({ books, onDelete, set_Id }) => {
  if (!books) return <h1>Loading...</h1>;

  return (
    <div className="mt-5">
      <hr />
      <h1>Book List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Author</th>
            <th scope="col">Book Title</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(({ _id, author, title, price }) => (
            <tr key={_id}>
              <td>{author}</td>
              <td>{title}</td>
              <td>{price}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm m-1"
                  data-bs-toggle="modal"
                  data-bs-target="#UpdateModal"
                  data-bs-whatever="@mdo"
                  onClick={() => set_Id(_id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger  btn-sm m-1"
                  onClick={() => onDelete(_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
