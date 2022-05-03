import { React } from 'react';

function AddBook() {
  return (
    <div className="form">
      <hr />
      <h2 className="add-book-title">ADD NEW BOOK</h2>

      <form action="">
        <input type="text" placeholder="Book Title" />
        <input type="text" placeholder="Book Author" />
        <select
          className="book-category-select"
          name="category"
          id="category"
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
}

export default AddBook;
