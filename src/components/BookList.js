import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { getBooks } from '../redux/books/books';
import AddBook from './AddBook';
import BookStoreUtility from '../BookstoreAPI/apiUtility';

function Books() {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const reformulateData = (data) => {
    const books = Object.entries(data);
    return books.map((element) => ({ item_id: element[0], ...element[1][0] }));
  };
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await BookStoreUtility.apiToGetBooks();
      dispatch(getBooks(reformulateData(response.data)));
    };

    fetchBooks();
    return () => {

    };
  }, []);

  return (
    <div className="books_container">
      {bookList ? bookList.map((item) => (
        <BookItem
          key={item.item_id}
          id={item.item_id}
          author={item.author}
          title={item.title}
          category={item.category}

        />
      )) : <h1>No books in the store</h1>}
      <AddBook />
    </div>
  );
}

export default Books;
