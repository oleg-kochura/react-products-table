import { createSelector } from 'reselect';


const getProducts = state => state.products.data;
const getFilters = state => state.filter.selected;

export const filteredProducts = createSelector(
  [getProducts, getFilters],
  (products, selected) => {
    const filteredArray = products.filter(product => {
      const isProductTypeOneOfSelected = selected.some(filter => filter.toLowerCase() === product.type.toLowerCase());

      return isProductTypeOneOfSelected && product;
    });

    return filteredArray;
  }
);
