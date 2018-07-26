import ACTION_TYPES from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return [...state, { text: action.text, completed: false, id: action.id }]

    case ACTION_TYPES.TOGGLE_TODO:
      return state.map(todo => (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo)

    default:
      return state
  }
}
