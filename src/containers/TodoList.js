import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class UnConnectedTodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
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
  }
}

const mapStateToProps = ({ todos }) => ({
  todos,
});

export default connect(mapStateToProps)(UnConnectedTodoList);
