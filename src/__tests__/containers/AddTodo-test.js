import React from 'react';
import { shallow } from 'enzyme';

import { UnConnectedAddTodo } from '../../containers/AddTodo';
import { findByTestAttr } from '../../../helpers/testUtils';

const setup = (props = {}) => {
  const wrapper = shallow(<UnConnectedAddTodo {...props} />);
  return wrapper;
};

describe('AddTodo', () => {
  let wrapper;
  let addTodoMock;

  beforeEach(() => {
    addTodoMock = jest.fn();

    const props = {
      addTodo: addTodoMock,
    };

    wrapper = setup(props);
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

  it('should call formSubmit on submit', () => {
    const formSubmitMock = jest.fn();

    wrapper.find('form').simulate('submit', { preventDefault: formSubmitMock });

    expect(formSubmitMock).toHaveBeenCalledTimes(1);
  });

  it('should call `addTodo` with input value on submit', () => {
    const input = findByTestAttr(wrapper, 'input-box');
    input.simulate('change', { target: { value: 'My first todo' } });

    expect(wrapper.instance().state.newTodo).toBe('My first todo');

    wrapper.find('form').simulate('submit', { preventDefault: () => { } });

    expect(addTodoMock).toHaveBeenCalledTimes(1);
  });

  it('should not call `addTodo` with no value on submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() { } });

    expect(addTodoMock).toHaveBeenCalledTimes(0);
  });

  it('should clear input on submit', () => {
    const input = findByTestAttr(wrapper, 'input-box');
    input.simulate('change', { target: { value: 'My first todo' } });

    expect(wrapper.instance().state.newTodo).toBe('My first todo');

    wrapper.find('form').simulate('submit', { preventDefault() { } });

    expect(wrapper.instance().state.newTodo).toBe('');
  });
});
