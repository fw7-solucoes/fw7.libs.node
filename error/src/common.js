import R from 'ramda'

class FWError extends Error { }

export const interceptError = err => {
  if (!(err instanceof FWError)) {
    throw Error(JSON.stringify([{ message: err.message }]))
  }

  throw err
}

export const error = R.curry((type, message) => ({ type, message }))

export const DEFAULT_ERROR = error('General', 'Houve algum erro no servidor, tente novamente.')

export const throwErr = errors => {
  throw new FWError(JSON.stringify(errors))
}

export const fieldError = R.curry((field, message) => R.assoc(
  'field',
  field,
  error('Field', message)
))
