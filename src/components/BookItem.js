import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 60;

const BookItem = (props) => {
  const dispatch = useDispatch();
  const {
    id,
    category,
    title,
    author,
  } = props;

  const removeHandler = () => {
    dispatch(deleteBook(id));
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
              <li className="actions comments">Comments</li>
              <li className="actions remove">
                <button type="button" onClick={removeHandler}>Remove</button>
              </li>
              <li className="actions edit">Edit</li>
            </ul>
          </div>
          <div className="c100 p34 center">
            <div className="slice">
              <div className="bar" />
              <div className="fill" />
            </div>
          </div>
          <div>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
          <div className="percent-container-completed">
            <div className="completed text-style-2">Completed</div>
            <div className="percent-complete">64%</div>
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
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
