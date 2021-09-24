
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

// reducers provided at highest level (index.js)
// data provided by useSelector from store (Booklist.jsx)
const bookList = (state = [], action) => {
  // TODO - set book list with data from server
  // NO. 1
  // if bookList doesn't change, React doesn't render the page, 
  // ...only on change
  if (action.type === 'SET_BOOK_LIST') {
    return action.payload;
  }
  // no change to data
  return state;
}

const reduxStore = createStore(
  combineReducers({
    bookList
  }),
  applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
