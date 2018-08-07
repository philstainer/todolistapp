import React from 'react';
import { shallow } from 'enzyme';

import TodoList, { UnConnectedTodoList, filterVisibleTodos } from '../../containers/TodoList';
import { findByTestAttr, checkProps, storeFactory } from '../../../helpers/testUtils';
import { VisibilityFilters } from '../../actions';

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

  it('should render todo with line-through if completed true', () => {
    const component = findByTestAttr(wrapper, 'todo');
    const todoStyles = component.at(1).props().style;
    expect(todoStyles.textDecoration).toEqual('line-through');
  });

  it('should render todo with no line-through if completed false', () => {
    const component = findByTestAttr(wrapper, 'todo');
    const todoStyles = component.at(0).props().style;
    expect(todoStyles.textDecoration).toEqual('none');
  });

  it('should call `toggleTodo` on todo click', () => {
    const component = findByTestAttr(wrapper, 'todo');

    component.first().simulate('click');

    expect(toggleTodoMock.mock.calls.length).toBe(1);
  });
});

describe('`filterVisibleTodos` should filter todos correctly', () => {
  const todos = [
    { text: 'First todo', completed: false, id: 0 },
    { text: 'Second todo', completed: true, id: 1 },
    { text: 'Third todo', completed: false, id: 2 },
  ];

  it('should filter `VisibilityFilters.SHOW_ALL` correctly', () => {
    const filteredTodos = filterVisibleTodos(todos, VisibilityFilters.SHOW_ALL);
    expect(filteredTodos.length).toBe(3);
  });

  it('should filter `VisibilityFilters.SHOW_ACTIVE` correctly', () => {
    const filteredTodos = filterVisibleTodos(todos, VisibilityFilters.SHOW_ACTIVE);
    expect(filteredTodos.length).toBe(2);
  });

  it('should filter `VisibilityFilters.SHOW_COMPLETED` correctly', () => {
    const filteredTodos = filterVisibleTodos(todos, VisibilityFilters.SHOW_COMPLETED);
    expect(filteredTodos.length).toBe(1);
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
