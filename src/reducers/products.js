import { SORT_BY_NAME, SORT_BY_RATING, SORT_BY_PRICE } from '../constants';
import data from '../data';
import { sortByOrder } from '../sorting';


const cloneProducts = data => {
  const products = [];
  data.forEach(product => products.push({...product}) );
  return products;
};

const initialState = {
  data,
  sortBy: {
    name: '',
    rating: '',
    price: ''
  }
};


const products = (state = initialState, action) => {
  let products = cloneProducts(state.data);

  switch (action.type) {
    case SORT_BY_NAME:
      return sortByOrder(state, 'name', products);

    case SORT_BY_RATING:
      return sortByOrder(state, 'rating', products);

    case SORT_BY_PRICE:
      return sortByOrder(state, 'price', products);

    default:
      return state;
  }
};

export default products;
