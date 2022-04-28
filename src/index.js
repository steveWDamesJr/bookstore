import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import { getBook } from './redux/books/books';
import './index.css';
import App from './App';

store.dispatch(getBook);

ReactDOM.render(
  <Provider store={store}>
    <App key={1} />
  </Provider>,
  document.getElementById('root'),
);
