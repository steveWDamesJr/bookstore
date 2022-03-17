import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const bookArr = useSelector((state) => state.booksReducer);

  return (
    <ul>
      {
        bookArr.map((bookItem) => (
          <BookItem
            key={bookItem.id}
            id={bookItem.id}
            category={bookItem.category}
            title={bookItem.title}
            author={bookItem.author}
          />
        ))
       }
    </ul>
  );
};

export default BookList;
