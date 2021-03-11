import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen, LibraryScreen } from "./screens";
import {
  createBook,
  retrieveBook,
  deleteBook,
  updateBook,
} from "./redux/book/bookActions";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const { books } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const [_id, set_Id] = useState("");

  const handleOnGetBook = async (author, title, price) => {
    dispatch(await createBook({ author, title, price }));
    dispatch(await retrieveBook());
  };

  const handleOnUpdateBook = async (set) => {
    dispatch(await updateBook({ _id, set }));
    dispatch(await retrieveBook());
  };

  const handleOnDeleteBook = async (_id) => {
    dispatch(await deleteBook({ _id }));
    dispatch(await retrieveBook());
  };

  useEffect(() => {
    const retrieve = async () => {
      await retrieveBook();
    };
    retrieve();
    return () => {};
  }, [handleOnGetBook, handleOnDeleteBook, handleOnUpdateBook]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/library">
            <LibraryScreen
              handleOnGetBook={handleOnGetBook}
              handleOnUpdateBook={handleOnUpdateBook}
              handleOnDeleteBook={handleOnDeleteBook}
              books={books}
              set_Id={set_Id}
              _id={_id}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
