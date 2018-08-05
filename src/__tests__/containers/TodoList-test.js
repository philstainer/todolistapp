import React from 'react';
import { shallow } from 'enzyme';

import TodoList, { UnConnectedTodoList } from '../../containers/TodoList';
import { findByTestAttr, checkProps, storeFactory } from '../../../helpers/testUtils';

const defaultProps = {
  todos: [
    { text: 'First todo', completed: false, id: 0 },
  ],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<UnConnectedTodoList {...setupProps} />);
  return wrapper;
};

it('should render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-todolist');
  expect(component.length).toBe(1);
});

it('should not throw warning with expected props', () => {
  checkProps(UnConnectedTodoList, defaultProps);
});

describe('if there are no todos', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ todos: [] });
  });

  it('should render no todos', () => {
    const component = findByTestAttr(wrapper, 'todo');
    expect(component.length).toBe(0);
  });
});

describe('if there are todos', () => {
  let wrapper;

  const todos = [
    { text: 'First todo', completed: false, id: 0 },
    { text: 'Second todo', completed: true, id: 1 },
    { text: 'Third todo', completed: false, id: 2 },
  ];

  beforeEach(() => {
    wrapper = setup({ todos });
  });

  it('should render todos', () => {
    const component = findByTestAttr(wrapper, 'todo');
    expect(component.length).toBe(3);
  });
});

describe('redux properties', () => {
  let wrapper;

  beforeEach(() => {
    const store = storeFactory(defaultProps);
    wrapper = shallow(<TodoList store={store} />).dive();
  });

  it('should have access to `todos` state', () => {
    const todosProp = wrapper.instance().props.todos;
    expect(todosProp).toBe(defaultProps.todos);
  });
});
