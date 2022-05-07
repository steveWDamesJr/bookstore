import http from './API';

const apiToGetBooks = () => http.get('/books');

const apiToAddBook = (data) => http.post('/books', data);

const apiToRemoveBook = (id) => http.delete(`/books/${id}`);

const BookStoreUtility = {
  apiToGetBooks,
  apiToAddBook,
  apiToRemoveBook,
};
export default BookStoreUtility;
