import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleTodo, VisibilityFilters } from '../actions';

export class UnConnectedTodoList extends React.PureComponent {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired,
  }

  render() {
    const { todos } = this.props;
    return (
      <div data-test="component-todolist">
        {
          todos.length === 0
            ? null
            : (
              <ul>
                {
                  todos.map(todo => (
                    <li data-test="todo" key={todo.id} onClick={() => this.props.toggleTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                      {todo.text}
                    </li>
                  ))
                }
              </ul>
            )
        }
      </div>
    );
  }
}

export const filterVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = ({ todos, visibilityFilter }) => ({
  todos: filterVisibleTodos(todos, visibilityFilter),
});

export default connect(mapStateToProps, { toggleTodo })(UnConnectedTodoList);
