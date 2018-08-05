// eslint-disable-next-line import/no-extraneous-dependencies
import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../src/reducers';
import { middlewares } from '../src/store/configureStore';

export const findByTestAttr = (wrapper, attribute) => (
  wrapper.find(`[data-test="${attribute}"]`)
);

export const checkProps = (component, conformingProps) => {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
  expect(propError).toBeUndefined();
};

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};
