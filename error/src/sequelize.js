import R from 'ramda'
import { schemaError, throwErr, DEFAULT_ERROR } from './common'

const errorEq = R.propEq('validatorKey')
const getError = R.pipe(
  R.head,
  R.cond([
    [errorEq('not_unique'), ({ path, value }) => schemaError(R.fromPairs([path, `${value} já foi utilizado.`]))],
    [R.T, R.always(DEFAULT_ERROR)]
  ])
)

const handleDBError = R.pipe(
  R.prop('errors'),
  R.ifElse(
    R.isNil,
    R.always(DEFAULT_ERROR),
    getError
  ),
  throwErr
)

export default handleDBError
