import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
// NO. 3: to render on page load
import { useEffect } from 'react';
// NO. 2
import axios from 'axios';
// NO. 6
import { useDispatch } from 'react-redux';
import './App.css';
// NOTES 1: importing for Router
import { HashRouter as Router, Route } from 'react-router-dom';
import ConfirmBook from '../ConfirmBook/ConfirmBook';


// NOTES: App is currently making GET request
function App() {

  // NO. 7
  const dispatch = useDispatch();

  // TODO - GET Book List from server
  // NO. 4
  useEffect(() => {
    fetchBookList();
  }, []);

  // NO. 5
  const fetchBookList = () => {
    axios({
      method: 'GET',
      // open up server.js
      url: '/books',
    }).then(response => {
      console.log(response.data);
      // const action = {type: 'SET_BOOK_LIST', payload: response.data,}
      // NO. 7
      // NOTES: this sends data (list of books) to reducer (bookList)
      dispatch({
        type: 'SET_BOOK_LIST', 
        payload: response.data,
      });
    }) // TODO add catch
  }

  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <Router>
          {/* component={BookList} is passing props */}
          <Route exact path="/" component={BookList} />
          <Route exact path="/add" component={BookForm} />
          <Route exact path="/confirm" component={ConfirmBook} />

        </Router>
        {/* STEP 3 */}
      
        {/* <BookList /> */}
      </main>
    </div>
  );
}

export default App;