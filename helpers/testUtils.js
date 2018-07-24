export const findByTestAttr = (wrapper, attribute) => (
  wrapper.find(`[data-test="${attribute}"]`)
)