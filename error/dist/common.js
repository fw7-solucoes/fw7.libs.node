"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _ramda = require('ramda'); var _ramda2 = _interopRequireDefault(_ramda);

class FWError extends Error { }

 const interceptError = err => {
  if (!(err instanceof FWError)) {
    throw Error(JSON.stringify([{ message: err.message }]))
  }

  throw err
}; exports.interceptError = interceptError

 const error = _ramda2.default.curry((type, message) => ({ type, message })); exports.error = error

 const DEFAULT_ERROR = exports.error.call(void 0, 'General', 'Houve algum erro no servidor, tente novamente.'); exports.DEFAULT_ERROR = DEFAULT_ERROR

 const throwErr = errors => {
  throw new FWError(JSON.stringify(errors))
}; exports.throwErr = throwErr

 const fieldError = _ramda2.default.curry((field, message) => _ramda2.default.assoc(
  'field',
  field,
  exports.error.call(void 0, 'Field', message)
)); exports.fieldError = fieldError
