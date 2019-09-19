"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _ramda = require('ramda'); var _ramda2 = _interopRequireDefault(_ramda);
var _common = require('./common');

const errorEq = _ramda2.default.propEq('validatorKey')
const getError = _ramda2.default.cond([
  [errorEq('not_unique'), ({ path, value }) => _common.fieldError.call(void 0, path, `${value} já foi utilizado.`)],
  [_ramda2.default.T, _ramda2.default.always(_common.DEFAULT_ERROR)]
])

const handleDBError = _ramda2.default.pipe(
  _ramda2.default.prop('errors'),
  _ramda2.default.ifElse(
    _ramda2.default.isNil,
    _ramda2.default.always([_common.DEFAULT_ERROR]),
    _ramda2.default.map(getError)
  ),
  _common.throwErr
)

exports. default = handleDBError
