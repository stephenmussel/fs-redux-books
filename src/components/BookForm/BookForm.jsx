import {useState} from 'react';
// STEP 1
import axios from 'axios';

// STEP 4: pass via props from App.jsx
function BookForm({fetchBookList}) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    console.log(`Adding book`, {title, author});

    // TODO - axios request to server to add book
    // STEP 2
    axios({
      method: 'POST',
      url: '/books',
      data: {
        title: title,
        author: author,
      }
    }).then(response => {
      // GET book list
      // STEP 5
      // can't send function to store. instead sent function via props
      fetchBookList();
    })
  };

  return (
    <section>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input 
          required 
          placeholder="Title" 
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input 
          required 
          placeholder="Author" 
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <button type="submit">
          Add Book
        </button>
      </form>
    </section>
  );
}

export default BookForm;