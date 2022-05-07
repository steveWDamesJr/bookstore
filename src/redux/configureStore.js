import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { booksState, booksReducer } from './books/books';
import { categoriesState, categoriesReducer } from './categories/categories';

const reducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore((state, action) => reducer(state, action),
  { books: booksState, categories: categoriesState },
  composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
