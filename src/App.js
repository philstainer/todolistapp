import React from 'react';

import AddTodo from './containers/AddTodo';
import TodoList from './containers/TodoList';
import FilterList from './containers/FilterList';

const App = () => (
  <div data-test="component-app">
    <AddTodo />
    <TodoList />
    <FilterList />
  </div>
);

export default App;
