import {
  CREATE_BOOK_SUCCESS,
  RETRIEVE_BOOK_SUCCESS,
  UPDATE_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
} from "./bookConstants";

const INITIAL_STATE = {
  books: [],
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_BOOK_SUCCESS:
      return { ...state, books: state.books };

    case RETRIEVE_BOOK_SUCCESS:
      return { ...state, books: action.payload };

    case UPDATE_BOOK_SUCCESS:
      return { ...state, books: state.books };

    case DELETE_BOOK_SUCCESS:
      return { ...state, books: state.books };

    default:
      return state;
  }
};

export default bookReducer;
