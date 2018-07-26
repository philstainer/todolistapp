import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddTodo extends Component {
  state = {
    newTodo: ''
  }

  static propTypes = {
  }

  inputChange = e => {
    this.setState({ newTodo: e.target.value })
  }

  formSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <div data-test='component-addtodo'>
        <form onSubmit={this.formSubmit}>
          <input data-test='input-box' type='text' placeholder='Enter todo' value={this.state.newTodo} onChange={this.inputChange} />
          <button data-test='submit-button' type='submit'>Add Todo</button>
        </form>
      </div>
    )
  }
}

export default AddTodo