import React from 'react';
import { shallow } from 'enzyme';

import FilterList, { UnConnectedFilterList } from '../../containers/FilterList';
import { findByTestAttr, storeFactory } from '../../../helpers/testUtils';
import { VisibilityFilters } from '../../actions';

const setup = (props = {}) => {
  const wrapper = shallow(<UnConnectedFilterList {...props} />);
  return wrapper;
};

describe('FilterList', () => {
  let wrapper;
  let setVisibilityFilterMock;

  beforeEach(() => {
    setVisibilityFilterMock = jest.fn();

    const props = {
      visibilityFilter: VisibilityFilters.SHOW_ALL,
      setVisibilityFilter: setVisibilityFilterMock,
    };

    wrapper = setup(props);
  });

  it('should render without error', () => {
    const component = findByTestAttr(wrapper, 'component-filterlist');
    expect(component.length).toBe(1);
  });

  it('should render filter buttons', () => {
    const filters = Object.keys(VisibilityFilters).length;
    const component = findByTestAttr(wrapper, 'filter-button');
    expect(component.length).toBe(filters);
  });

  it('should render button disabled when filter match', () => {
    const component = findByTestAttr(wrapper, 'filter-button');
    expect(component.at(0).props().disabled).toBe(true);
  });

  it('should not render button disabled when filter not matched', () => {
    const component = findByTestAttr(wrapper, 'filter-button');
    expect(component.at(1).props().disabled).toBe(false);
  });

  it('should call `setVisibilityFilter` on button click', () => {
    const component = findByTestAttr(wrapper, 'filter-button');
    component.at(1).simulate('click');
    expect(setVisibilityFilterMock.mock.calls.length).toBe(1);
  });
});

describe('redux properties', () => {
  let wrapper;

  beforeEach(() => {
    const store = storeFactory({ visibilityFilter: VisibilityFilters.SHOW_ALL });
    wrapper = shallow(<FilterList store={store} />).dive();
  });

  it('should have access to `visibilityFilter` state', () => {
    const visibilityFilterProp = wrapper.instance().props.visibilityFilter;
    expect(visibilityFilterProp).toBe(VisibilityFilters.SHOW_ALL);
  });

  it('should have `setVisibilityFilter` action creator on props', () => {
    const setVisibilityFilterProp = wrapper.instance().props.setVisibilityFilter;
    expect(setVisibilityFilterProp).toBeInstanceOf(Function);
  });
});
