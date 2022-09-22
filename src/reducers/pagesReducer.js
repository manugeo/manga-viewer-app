import { setCurrentPage } from './currentPageReducer';

const pagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PAGES':
      return [...action.pages];
    default:
      return state;
  }
};

export const setPages = (pages = []) => {
  return (dispatch) => {
    dispatch({ type: 'SET_PAGES', pages });
    dispatch(setCurrentPage(pages[0] || null));
  };
};

export default pagesReducer;