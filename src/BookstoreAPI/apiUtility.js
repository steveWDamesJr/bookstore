import https from './API';

const apiToGetBooks = () => https.get('/books');

const apiToAddBook = (data) => https.post('/books', data);

const apiToRemoveBook = (id) => https.delete(`/books/${id}`);

const BookStoreUtility = {
  apiToGetBooks,
  apiToAddBook,
  apiToRemoveBook,
};

export default BookStoreUtility;
