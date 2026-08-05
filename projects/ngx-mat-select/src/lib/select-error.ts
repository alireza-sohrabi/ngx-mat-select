/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * @docs-private
 */
export function getSelectDynamicMultipleError(): Error {
  return Error('Cannot change `multiple` mode of select after initialization.');
}

export function getSelectOptionLabelError(): Error {
  return Error('lib-select error: optionLabel is not defined');
}
