const currentPageReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return action.currentPage;
    default:
      return state;
  }
};

export const setCurrentPage = (currentPage) => {
  console.log('Setting current page :', currentPage);
  return { type: 'SET_CURRENT_PAGE', currentPage };
};

export default currentPageReducer;