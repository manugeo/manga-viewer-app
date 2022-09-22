import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./reducers/booksReducer";
import chaptersReducer from "./reducers/chaptersReducer";
import currentPageReducer from "./reducers/currentPageReducer";
import pagesReducer from "./reducers/pagesReducer";

const store = configureStore({
  reducer: {
    books: booksReducer,
    chapters: chaptersReducer,
    pages: pagesReducer,
    currentPage: currentPageReducer
  }
});

export default store;