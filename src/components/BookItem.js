import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const { title, author } = props;

  return (
    <div>
      <ul>
        <li className="books-container">
          <div className="book-info-container">
            <span className="genre">Action</span>
            {' '}
            <br />
            <span className="title">{title}</span>
            {' '}
            <br />
            <span className="author">{author}</span>
            <br />
            <ul className="actions-ul">
              <li className="actions">Comments</li>
              <li className="actions">Remove</li>
              <li className="actions">Edit</li>
            </ul>
          </div>
          <div className="c100 p34 center">
            <span>64%</span>
            <div className="slice">
              <div className="bar" />
              <div className="fill" />
            </div>
          </div>
          <div className="percent-complete-container">
            <span className="percent-complete">64%</span>
            <span className="completed text-style-2">Completed</span>
          </div>
          <div className="chapter-progress-container">
            <span className="current-chapter">Current Chapter</span>
            <span className="chapter-number">Chapter 17</span>
            <button
              className="btn-update-progress"
              type="button"
            >
              UPDATE PROGRESS
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
