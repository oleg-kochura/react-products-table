import { SORT_BY_NAME, SORT_BY_RATING, SORT_BY_PRICE } from '../constants';
import data from '../data';
import { sorting } from '../sorting';


const initialState = {
  data,
  sortBy: {
    name: '',
    rating: '',
    price: ''
  }
};


const products = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_NAME:
      return sorting(state, 'name');

    case SORT_BY_RATING:
      return sorting(state, 'rating');

    case SORT_BY_PRICE:
      return sorting(state, 'price');

    default:
      return state;
  }
};

export default products;
