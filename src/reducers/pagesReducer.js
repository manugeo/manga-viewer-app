import { setCurrentPage } from './currentPageReducer';

const pagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PAGES':
      return [...action.pages];
    default:
      return state;
  }
};

// Note: Pre-loading images for faster rendering.
const preloadImages = (pages = []) => {
  for (const { image } of pages) {
    const img = new Image();
    img.src = image.file;
  }
};

export const setPages = (pages = []) => {
  return (dispatch) => {
    dispatch({ type: 'SET_PAGES', pages });
    dispatch(setCurrentPage(pages[0] || null));
    preloadImages(pages);
  };
};

export default pagesReducer;