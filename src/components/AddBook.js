import { React } from 'react';

function AddBook() {
  return (
    <div>
      <h2>ADD NEW BOOK</h2>

      <form action="">
        <input type="text" placeholder="Book Title" />
        <input type="text" placeholder="Book Author" />
        <select
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
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
