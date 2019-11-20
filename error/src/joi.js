import R from 'ramda'
import { schemaError, throwErr } from './common'

const JOI_OPTIONS = { abortEarly: false }

const toKeyMsgTuple = ({ message, context }) => [context.key, message]

const formatJoiErrors = R.pipe(
  R.prop('details'),
  R.map(toKeyMsgTuple),
  R.fromPairs,
  schemaError,
  throwErr
)

const handleJoiError = R.curry((schema, value) => schema.validate(value, JOI_OPTIONS).catch(formatJoiErrors))

export default handleJoiError
