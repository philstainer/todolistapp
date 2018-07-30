import React from 'react';
import { shallow } from 'enzyme';

import AddTodo from '../../containers/AddTodo';
import { findByTestAttr } from '../../../helpers/testUtils';

const setup = () => {
  const wrapper = shallow(<AddTodo />);
  return wrapper;
};

describe('AddTodo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('should render without error', () => {
    const component = findByTestAttr(wrapper, 'component-addtodo');
    expect(component.length).toBe(1);
  });

  it('should render the input box', () => {
    const component = findByTestAttr(wrapper, 'input-box');
    expect(component.length).toBe(1);
  });

  it('should render the submit button', () => {
    const component = findByTestAttr(wrapper, 'submit-button');
    expect(component.length).toBe(1);
  });

  it('should set state when input change', () => {
    const component = findByTestAttr(wrapper, 'input-box');
    component.simulate('change', { target: { value: 'My first todo' } });

    expect(wrapper.instance().state.newTodo).toBe('My first todo');
  });

  it('should call `addTodo` with input value and next todo id');

  it('should clear input on submit');
});
