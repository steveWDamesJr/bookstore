import { useSelector } from 'react-redux';
import BookItem from './BookItem';

function BookList() {
  const bookArr = useSelector((state) => state.books);

  return (
    <div>
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
    </div>
  );
}

export default BookList;
