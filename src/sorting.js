const sortingBy = {
  name: (data) => {
    return data.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    })
  },

  price: (data) => {
    return data.sort((a, b) => {
      if (Number(a.price.split('$').join('')) > Number(b.price.split('$').join(''))) return 1;
      if (Number(a.price.split('$').join('')) < Number(b.price.split('$').join(''))) return -1;
    });
  },

  rating: (data) => {
    return data.sort((a, b) => {
      if (Number(a.rating) > Number(b.rating)) return 1;
      if (Number(a.rating) < Number(b.rating)) return -1;
    })
  }
};


export const sortByOrder = (state, key, products) => {
  switch (state.sortBy[key]) {
    case '':
    case 'desc':
      return {
        ...state,
        data: sortingBy[key](products),
        sortBy: {
          ...state.sortBy,
          [key]: 'asc'
        }
      };
    case 'asc':
      return {
        ...state,
        data: sortingBy[key](products).reverse(),
        sortBy: {
          ...state.sortBy,
          [key]: 'desc'
        }
      };
    default:
      return state;
  }
};
