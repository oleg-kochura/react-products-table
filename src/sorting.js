const cloneProducts = data => {
  let products = [];
  data.forEach(product => products.push({...product}) );

  return products;
};

const sortingByKey = data => key => {
  switch (key) {
    case 'name':
      return data.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      });
    case 'rating':
      return data.sort((a, b) => {
        if (Number(a.rating) > Number(b.rating)) return 1;
        if (Number(a.rating) < Number(b.rating)) return -1;
      });
    case 'price':
      return data.sort((a, b) => {
        if (Number(a.price.split('$').join('')) > Number(b.price.split('$').join(''))) return 1;
        if (Number(a.price.split('$').join('')) < Number(b.price.split('$').join(''))) return -1;
      });
  }
};


export const sorting = (state, key) => {
  let products = cloneProducts(state.data);

  switch (state.sortBy[key]) {
    case '':
    case 'desc':
      return {
        ...state,
        data: sortingByKey(products)(key),
        sortBy: {
          ...state.sortBy,
          [key]: 'asc'
        }
      };
    case 'asc':
      return {
        ...state,
        data: sortingByKey(products)(key).reverse(),
        sortBy: {
          ...state.sortBy,
          [key]: 'desc'
        }
      };
    default:
      return state;
  }
};
