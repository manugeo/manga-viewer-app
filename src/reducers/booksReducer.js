import booksService from '../services/books';

const { getAll } = booksService;

const booksReducer = (state = [], action) => {
  return state;
}

const initializeBooks = () => {
  return async (dispatch) => {
    const books = await getAll();
    console.log({ books });
    dispatch({ type: 'SET_BOOKS', books });
  };
};

export default booksReducer;