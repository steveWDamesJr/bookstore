import React from 'react';

const Form = () => (
  <div>
    <h3>Add New Book</h3>
    <input type="text" placeholder="Book Title" required />
    <input type="text" placeholder="Book Author" required />
    <select
      name="category"
      defaultValue=""
      required
    >
      <option value="" hidden>
        Category
      </option>
      <option value="Action">
        Action
      </option>
      <option value="children">
        Children
      </option>
      <option value="disney">
        Disney
      </option>
    </select>
    <button type="submit">Add Book</button>
  </div>
);
export default Form;
