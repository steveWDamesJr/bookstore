import BookStoreUtility from '../../BookstoreAPI/apiUtility';

export const booksState = [];

const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const booksReducer = (booksState = [], action) => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return action.books;
    case ADD_BOOK:
      return [...booksState, action.book];
    case REMOVE_BOOK:
      return [...booksState].filter((book) => book.item_id !== action.id);
    default:
      return booksState;
  }
};

export function getBooks(books) {
  return { type: GET_BOOKS_SUCCESS, books };
}

export const addBook = (book) => async (dispatch) => {
  await BookStoreUtility.apiToAddBook(book);
  dispatch({ type: ADD_BOOK, book });
};

export const removeBook = (id) => async (dispatch) => {
  await BookStoreUtility.apiToRemoveBook(id);
  dispatch({ type: REMOVE_BOOK, id });
};
