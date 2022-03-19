const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS_SUCCESS = 'bookStore/books/GET_BOOK';

const initialState = [];

const urlAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3hw8RYqnMx0YNQ7iHXRW/books';

export const sentBookAPI = (payload) => (
  async (dispatch) => {
    await fetch(urlAPI, {
      method: 'POST',
      body: JSON.stringify({
        item_id: payload.id,
        title: {
          bookTitle: payload.title,
          bookAuthor: payload.author,
        },
        category: payload.category,
      }),
      headers: {
        'Content-type':
        'application/JSON',
      },
    });
    dispatch({
      type: ADD_BOOK,
      payload,
    });
  }
);

export const deleteBook = (id) => (
  async (dispatch) => {
    const response = await
    fetch(`${urlAPI}/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/JSON',
      },
    });
    if (response.status === 201) {
      dispatch({
        type: REMOVE_BOOK,
        payload: id,
      });
    }
  }
);

export const getBook = async (dispatch) => {
  const response = await fetch(urlAPI);
  const dataBooks = await
  response.json();
  const booksArr = Object.entries(dataBooks);
  booksArr.forEach((bookItem) => {
    const [id, value] = bookItem;
    const { title, category } = value[0];
    const { bookTitle, bookAuthor } = title;

    const newBookEntry = {
      id,
      title: bookTitle,
      author: bookAuthor,
      category,
    };
    dispatch({
      type: ADD_BOOK,
      payload: newBookEntry,
    });
  });
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:

      return state.filter((book) => book.id !== action.payload);

    case GET_BOOKS_SUCCESS:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default booksReducer;
