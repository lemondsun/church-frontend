
/**
 * Return node(s) with data-test attribute
 * @param {*} wrapper 
 * @param {*} attribute 
 */
export const findByTestAttribute = (wrapper, attribute) => wrapper.find(`[data-test=${attribute}]`)