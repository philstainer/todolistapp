import ACTION_TYPES, {
  addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters,
} from '../../actions';

import { storeFactory } from '../../../helpers/testUtils';

describe('actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    const addTodoAction = addTodo('New Todo');
    const expectedAction = {
      type: ACTION_TYPES.ADD_TODO,
      id: 0,
      text: 'New Todo',
    };

    expect(addTodoAction).toEqual(expectedAction);
  });

  it('toggleTodo should create TOGGLE_TODO action', () => {
    const toggleTodoAction = toggleTodo(1);
    const expectedAction = {
      type: ACTION_TYPES.TOGGLE_TODO,
      id: 1,
    };

    expect(toggleTodoAction).toEqual(expectedAction);
  });

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', async () => {
    const store = storeFactory();

    await store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));

    expect(store.getState().visibilityFilter).toBe(VisibilityFilters.SHOW_ACTIVE);
  });
});
