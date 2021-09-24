import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';


function BookList() {
  // NOTES: this gets data from store
  const bookList = useSelector(store => store.bookList);

  return (
    <section>
      <h2>All Books</h2>
      <Link to ="/add">Add a Book</Link>
      <ul>
        {bookList.map((book, index) => 
          <li key={index}>{book.title} by {book.author}</li>  
        )}
      </ul>
    </section>
  );
}

export default BookList;