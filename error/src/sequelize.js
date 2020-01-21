import R from 'ramda'
import { schemaError, throwErr } from './common'

const errorEq = R.propEq('validatorKey')
const throwFirstError = R.pipe(
  R.head,
  R.cond([
    [errorEq('not_unique'), ({ path, value }) => schemaError(R.objOf(path, `${value} já foi utilizado.`))],
    [R.T, R.identity]
  ]),
  throwErr
)

const handleDBError = error => {
  if (!error.errors) {
    throwErr(error)
  }

  throwFirstError(error.errors)
}

export default handleDBError
