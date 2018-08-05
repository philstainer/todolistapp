import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const App = () => (
  <div data-test="component-app">
    <AddTodo />
    <TodoList />
  </div>
);

export default App;
