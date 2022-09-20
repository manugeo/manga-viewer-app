import booksService from '../services/books';

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

export const selectBook = (id) => {
  return { type: 'SELECT_BOOK', id };
};

export const initializeBooks = () => {
  return async (dispatch) => {
    const books = await getAll();
    console.log({ books });
    dispatch({ type: 'SET_BOOKS', books });
  };
};

export default booksReducer;