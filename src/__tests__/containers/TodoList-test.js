import React from 'react';
import { shallow } from 'enzyme';

import TodoList from '../../containers/TodoList';
import { findByTestAttr } from '../../../helpers/testUtils';

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
