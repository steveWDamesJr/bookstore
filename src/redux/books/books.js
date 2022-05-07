import BookStoreUtility from '../../BookstoreAPI/apiUtility';

export const booksState = [];

const GET_BOOKS_SUCCESS = 'bookStore/books/GET_BOOKS_SUCCESS';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export function getBooks(books) {
  return { type: GET_BOOKS_SUCCESS, books };
}

export const addBook = (book) => async (dispatch) => {
  await BookStoreUtility.apiToAddBook(book);
  dispatch({ type: ADD_BOOK, book });
};

export const removeBook = (id) => async (dispatch) => {
  await BookStoreUtility.apiToRemoveBook();
  dispatch({ type: REMOVE_BOOK, id });
};

export const booksReducer = (state = booksState, action) => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return action.books;
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state].filter((book) => book.item_id !== action.id);
    default:
      return state;
  }
};
