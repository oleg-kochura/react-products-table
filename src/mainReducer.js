import { combineReducers } from 'redux';
import products from './reducers/products';
import filter from './reducers/filter';

const mainReducer = combineReducers({
  products,
  filter
});

export default mainReducer;
