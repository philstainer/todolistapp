import React from 'react';
import { shallow } from 'enzyme';

import TodoList, { UnConnectedTodoList } from '../../containers/TodoList';
import { findByTestAttr, checkProps, storeFactory } from '../../../helpers/testUtils';

const defaultProps = {
  todos: [
    { text: 'First todo', completed: false, id: 0 },
  ],
  toggleTodo: () => { },
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
  let toggleTodoMock;

  beforeEach(() => {
    toggleTodoMock = jest.fn();

    const props = {
      todos: [
        { text: 'First todo', completed: false, id: 0 },
        { text: 'Second todo', completed: true, id: 1 },
        { text: 'Third todo', completed: false, id: 2 },
      ],
      toggleTodo: toggleTodoMock,
    };

    wrapper = setup(props);
  });

  it('should render todos', () => {
    const component = findByTestAttr(wrapper, 'todo');
    expect(component.length).toBe(3);
  });

  it('should call `toggleTodo` on todo click', () => {
    const component = findByTestAttr(wrapper, 'todo');

    component.first().simulate('click');

    expect(toggleTodoMock.mock.calls.length).toBe(1);
  });
});

describe('redux properties', () => {
  let wrapper;

  beforeEach(() => {
    const store = storeFactory({ todos: defaultProps.todos });
    wrapper = shallow(<TodoList store={store} />).dive();
  });

  it('should have access to `todos` state', () => {
    const todosProp = wrapper.instance().props.todos;
    expect(todosProp).toBe(defaultProps.todos);
  });

  it('should have `toggleTodo` action creator on props', () => {
    const toggleTodoProp = wrapper.instance().props.toggleTodo;
    expect(toggleTodoProp).toBeInstanceOf(Function);
  });
});
