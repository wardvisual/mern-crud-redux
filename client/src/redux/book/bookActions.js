import axiosInstance from "../../config/axios";

import {
  CREATE_BOOK,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_FAIL,
  RETRIEVE_BOOK,
  RETRIEVE_BOOK_SUCCESS,
  RETRIEVE_BOOK_FAIL,
  UPDATE_BOOK,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAIL,
  DELETE_BOOK,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAIL,
} from "./bookConstants";

const createBook = async (bookToSubmit) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BOOK, loading: true });
    const { data } = await axiosInstance.post(`/create`, bookToSubmit);
    return dispatch({
      type: CREATE_BOOK_SUCCESS,
      loading: false,
      payload: data.result,
    });
  } catch (err) {
    dispatch({ type: CREATE_BOOK_FAIL, loading: false, err: err.message });
  }
};

const retrieveBook = () => async (dispatch) => {
  try {
    dispatch({ type: RETRIEVE_BOOK, loading: true });
    const { data } = await axiosInstance.get(`/retrieve`);
    return dispatch({
      type: RETRIEVE_BOOK_SUCCESS,
      loading: false,
      payload: data.result,
    });
  } catch (err) {
    dispatch({ type: RETRIEVE_BOOK_FAIL, loading: false, err: err.message });
  }
};

const updateBook = (updatedBook) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BOOK, loading: true });
    const { data } = await axiosInstance.put("/update", updatedBook);
    console.log("updatedBook", updatedBook);
    return await dispatch({ type: UPDATE_BOOK_SUCCESS, payload: data.result });
  } catch (err) {
    dispatch({ type: UPDATE_BOOK_FAIL, loading: false, err: err.message });
  }
};

const deleteBook = (_id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BOOK, loading: true });
    const { data } = await axiosInstance.delete("/delete", { params: _id });
    return await dispatch({
      type: DELETE_BOOK_SUCCESS,
      loading: false,
      payload: data.result,
    });
  } catch (err) {
    dispatch({ type: DELETE_BOOK_FAIL, loading: false, err: err.message });
  }
};

export { createBook, retrieveBook, updateBook, deleteBook };
