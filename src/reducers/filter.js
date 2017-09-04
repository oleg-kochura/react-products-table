import { ACTIVATE_FILTER, DEACTIVATE_FILTER } from '../constants';


const initialState = {
  selected: [],
  available: [
    {name: 'Notebooks', type: 'notebook'},
    {name: 'Tablets', type: 'tablet'},
    {name: 'Mobile phones', type: 'phone'}
  ]
};


const addToSelected = (state, value) => {
  const selected = [...state.selected, value];
  return {...state, selected};
};

const removeFromSelected = (state, value) => {
  const selected = state.selected.filter(item => item.toLowerCase() !== value.toLowerCase());
  return {...state, selected};
};


const filter = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE_FILTER:
      return addToSelected(state, action.filter);

    case DEACTIVATE_FILTER:
      return removeFromSelected(state, action.filter);

    default:
      return state;
  }
};

export default filter;
