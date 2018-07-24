import ACTION_TYPES, { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from '../../actions'

describe('actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    const addTodoAction = addTodo('New Todo', 1)
    const expectedAction = {
      type: ACTION_TYPES.ADD_TODO,
      id: 1,
      text: 'New Todo'
    }

    expect(addTodoAction).toEqual(expectedAction)
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    const toggleTodoAction = toggleTodo(1)
    const expectedAction = {
      type: ACTION_TYPES.TOGGLE_TODO,
      id: 1
    }

    expect(toggleTodoAction).toEqual(expectedAction)
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    const setVisibilityFilterAction = setVisibilityFilter(VisibilityFilters.SHOW_ALL)
    const expectedAction = {
      type: ACTION_TYPES.SET_VISIBILITY_FILTER,
      filter: VisibilityFilters.SHOW_ALL
    }

    expect(setVisibilityFilterAction).toEqual(expectedAction)
  })
})
