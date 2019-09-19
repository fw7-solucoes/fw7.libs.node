import R from 'ramda'
import { fieldError, throwErr, DEFAULT_ERROR } from './common'

const errorEq = R.propEq('validatorKey')
const getError = R.cond([
  [errorEq('not_unique'), ({ path, value }) => fieldError(path, `${value} já foi utilizado.`)],
  [R.T, R.always(DEFAULT_ERROR)]
])

const handleDBError = R.pipe(
  R.prop('errors'),
  R.ifElse(
    R.isNil,
    R.always([DEFAULT_ERROR]),
    R.map(getError)
  ),
  throwErr
)

export default handleDBError
