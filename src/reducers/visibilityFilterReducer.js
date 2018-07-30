import ACTION_TYPES, { VisibilityFilters } from '../actions';

export default (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
