import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  const [book, setBook] = useState(
    {
      item_id: uuid(),
    },
  );

  const onChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const sendBook = () => {
    dispatch(addBook(book));
    setBook({
      item_id: uuid(),
    });
  };

  return (
    <div className="form">
      <hr />
      <h2 className="add-book-title">ADD NEW BOOK</h2>

      <form>
        <input className="book-title-input" name="title" placeholder="Book Title" onChange={onChange} value={book.title ? book.title : ''} />
        <input className="book-author-input" name="author" placeholder="Book Author" onChange={onChange} value={book.author ? book.author : ''} />
        <select
          className="book-category-select"
          name="category"
          id="category"
          required
          defaultValue="Category"
          onChange={onChange}
        >
          <option disabled hidden>
            Category
          </option>
          <option value="Action">
            Action
          </option>
          <option value="Adventure">
            Adventure
          </option>
          <option value="Self help">
            Self help
          </option>
        </select>
        <button className="add-book-button" type="button" onClick={sendBook}>Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
