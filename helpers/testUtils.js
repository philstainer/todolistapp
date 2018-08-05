// eslint-disable-next-line import/no-extraneous-dependencies
import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, attribute) => (
  wrapper.find(`[data-test="${attribute}"]`)
);

export const checkProps = (component, conformingProps) => {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
  expect(propError).toBeUndefined();
};
