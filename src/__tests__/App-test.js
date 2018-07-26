import React from 'react';
import { shallow } from 'enzyme'

import App from '../containers/App';
import { findByTestAttr } from '../../helpers/testUtils'

const setup = () => {
  const wrapper = shallow(<App />)
  return wrapper
}

describe('App', () => {
  it('should render without crashing', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-app')
    expect(component.length).toBe(1)
  })
})
