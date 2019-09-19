"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _ramda = require('ramda'); var _ramda2 = _interopRequireDefault(_ramda);
var _common = require('./common');

const JOI_OPTIONS = { abortEarly: false }

const assocField = ({ message, context }) => _common.fieldError.call(void 0, context.key, message)

const formatJoiErrors = _ramda2.default.pipe(
  _ramda2.default.prop('details'),
  _ramda2.default.map(assocField),
  _common.throwErr
)

const handleJoiError = _ramda2.default.curry((schema, value) => schema.validate(value, JOI_OPTIONS).catch(formatJoiErrors))

exports. default = handleJoiError
