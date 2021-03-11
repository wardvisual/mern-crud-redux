import { combineReducers } from "redux";
import bookReducer from "./book/bookReducer";

const rootReducer = combineReducers({
  book: bookReducer,
});

export default rootReducer;
