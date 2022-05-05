const ADD_CATEGORY = 'bookStore/categories/ADD_CATEGORY';
const REMOVE_CATEGORY = 'bookStore/categories/REMOVE_CATEGORY';
const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

export const categoriesState = [];

export function addCategory(category) {
  return { type: ADD_CATEGORY, category };
}

export function removeCategory(id) {
  return { type: REMOVE_CATEGORY, id };
}
export function checkStatus() {
  return { type: CHECK_STATUS };
}

export const categoriesReducer = (state = categoriesState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    case ADD_CATEGORY:
      return [...state, action.category];
    case REMOVE_CATEGORY:
      return [...state].filter((category) => category.id !== action.id);
    default:
      return state;
  }
};
