import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { sentBookAPI } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const book = {
    id: uuidv4(),
    title,
    author,
    category,
  };

  const sendBook = (e) => {
    e.preventDefault();
    dispatch(sentBookAPI(book));
  };

  return (
    <div className="form">
      <h2 className="add-book-title">ADD NEW BOOK</h2>

      <form action="" onSubmit={sendBook}>
        <input className="book-title-input" type="text" placeholder="Book Title" required onChange={(e) => setTitle(e.target.value)} />
        <input className="book-author-input" type="text" placeholder="Book Author" required onChange={(e) => setAuthor(e.target.value)} />
        <select
          className="book-category-select"
          name="category"
          id="category"
          required
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>
            Category
          </option>
          <option value="action">
            Action
          </option>
          <option value="family">
            Family
          </option>
          <option value="documentary">
            Documentary
          </option>
        </select>
        <button className="add-book-button" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
