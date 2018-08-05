import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos }) => (
  <div data-test="component-todolist">
    {
      todos.length === 0
        ? null
        : (
          <ul>
            {
              todos.map(todo => (
                <li data-test="todo" key={todo.id}>
                  {todo}
                </li>
              ))
            }
          </ul>
        )
    }
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TodoList;
