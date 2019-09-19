import R from 'ramda'
import { fieldError, throwErr } from './common'

const JOI_OPTIONS = { abortEarly: false }

const assocField = ({ message, context }) => fieldError(context.key, message)

const formatJoiErrors = R.pipe(
  R.prop('details'),
  R.map(assocField),
  throwErr
)

const handleJoiError = R.curry((schema, value) => schema.validate(value, JOI_OPTIONS).catch(formatJoiErrors))

export default handleJoiError
