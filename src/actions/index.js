import {
  ACTIVATE_FILTER,
  DEACTIVATE_FILTER,
  SORT_BY_NAME,
  SORT_BY_RATING,
  SORT_BY_PRICE
} from '../constants';


export const onSortingByName = () => ({type: SORT_BY_NAME});
export const onSortingByRating = () => ({type: SORT_BY_RATING});
export const onSortingByPrice = () => ({type: SORT_BY_PRICE});

export const onActivateFilter = filter => ({
  type: ACTIVATE_FILTER,
  filter
});

export const onDeactivateFilter = filter => ({
  type: DEACTIVATE_FILTER,
  filter
});
