export const booksState = [{
  id: '1',
  category: 'Adventure',
  title: 'Warriors',
  author: 'Erin Hunter',
},
{
  id: '2',
  category: 'Action',
  title: 'The Good Soldier',
  author: 'L. T. Ryan',
},
{
  id: '3',
  category: 'Self Help',
  title: 'Cracking the Coding Interview',
  author: 'Gayle Laakmann McDowell',
}];

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}

export const booksReducer = (booksState = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...booksState, action.book];
    case REMOVE_BOOK:
      return [...booksState].filter((book) => book.id !== action.id);
    default:
      return booksState;
  }
};
