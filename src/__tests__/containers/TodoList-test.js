import React from 'react';
import { shallow } from 'enzyme';

import TodoList from '../../containers/TodoList';
import { findByTestAttr, checkProps } from '../../../helpers/testUtils';

const defaultProps = {
  todos: [
    { text: 'First todo', completed: false, id: 0 },
  ],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<TodoList {...setupProps} />);
  return wrapper;
};

it('should render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-todolist');
  expect(component.length).toBe(1);
});

it('should not throw warning with expected props', () => {
  checkProps(TodoList, defaultProps);
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
