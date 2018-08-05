import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';

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

const mapStateToProps = ({ todos }) => ({
  todos,
});

export default connect(mapStateToProps, { toggleTodo })(UnConnectedTodoList);
