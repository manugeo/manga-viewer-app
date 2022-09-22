import chaptersService from '../services/chapters';
import { setPages } from './pagesReducer';

const { getChapters } = chaptersService;

const chaptersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHAPTERS':
      return [...action.chapters];

    case 'SELECT_CHAPTER':
      return state.map(chapter => {
        return (chapter.id === action.id) ? { ...chapter, isSelected: true } : { ...chapter, isSelected: false };
      });

    default:
      return state;
  }
}

export const selectChapter = ({ id, pages }) => {
  return (dispatch) => {
    dispatch({ type: 'SELECT_CHAPTER', id: id });
    dispatch(setPages(pages));
  };
};

export const loadChapters = (ids) => {
  return async (dispatch) => {
    const response = await getChapters(ids);
    const chapters = response.map((chapter, i) => {
      if (i === 0) dispatch(setPages(chapter.pages));
      chapter.isSelected = (i === 0);
      return chapter;
    });
    dispatch({ type: 'SET_CHAPTERS', chapters });
  };
};

export default chaptersReducer;