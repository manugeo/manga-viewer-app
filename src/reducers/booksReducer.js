import booksService from '../services/books';
import { loadChapters } from './chaptersReducer';

const { getAll } = booksService;

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return [...action.books];

    case 'SELECT_BOOK':
      return state.map(book => {
        return (book.id === action.id) ? { ...book, isSelected: true } : { ...book, isSelected: false };
      });

    default:
      return state;
  }
}

export const selectBook = ({ chapter_ids, id }) => {
  return async (dispatch) => {
    const chapterIds = chapter_ids;
    dispatch(loadChapters(chapterIds));
    dispatch({ type: 'SELECT_BOOK', id: id });
  };

};

export const initializeBooks = () => {
  return async (dispatch) => {
    const response = await getAll();
    const books = response.map((book, i) => {
      if (i === 0) {
        book.isSelected = true;
        const chapterIds = book.chapter_ids;
        dispatch(loadChapters(chapterIds));
      } else {
        book.isSelected = false;
      }
      return book;
    });
    dispatch({ type: 'SET_BOOKS', books });
  };
};

export default booksReducer;