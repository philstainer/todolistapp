import visibilityFilterReducer from '../../reducers/visibilityFilterReducer';
import ACTION_TYPES, { VisibilityFilters } from '../../actions';

describe('visibility reducer', () => {
  it('should handle initial state', () => {
    expect(visibilityFilterReducer(undefined, {})).toBe(VisibilityFilters.SHOW_ALL);
  });

  it('should handle setVisibilityFilter', () => {
    expect(
      visibilityFilterReducer(VisibilityFilters.SHOW_ALL,
        {
          type: ACTION_TYPES.SET_VISIBILITY_FILTER,
          filter: VisibilityFilters.SHOW_COMPLETED,
        }),
    ).toBe(VisibilityFilters.SHOW_COMPLETED);
  });
});
