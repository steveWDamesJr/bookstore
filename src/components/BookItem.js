import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const percentage = 64;

function BookItem({ ...props }) {
  const {
    id,
    author,
    title,
    category,
  } = props;
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <ul>
        <li className="books-container">
          <div className="book-info-container">
            <span className="genre">{category}</span>
            {' '}
            <br />
            <span className="title">{title}</span>
            {' '}
            <br />
            <span className="author">{author}</span>
            <br />
            <ul className="actions-ul">
              <li className="actions">Comments</li>
              <li className="actions">
                <button type="button" onClick={removeHandler}>Remove</button>
              </li>
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
          <div>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
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
}

export default BookItem;
BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
