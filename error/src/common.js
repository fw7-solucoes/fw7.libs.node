import R from 'ramda'
import { toApolloError } from 'apollo-server'

class FWError extends Error {
  constructor ({ message, code, ...rest }) {
    super(message)
    this.code = code

    Object.entries(rest).forEach(([key, value]) => {
      this[key] = value
    })
  }
}

export const formatError = error => {
  const { extensions } = error

  if (extensions && extensions.exception) {
    const { code } = extensions.exception
    return toApolloError(error, code)
  }

  return error
}

export const error = R.curry((code, message) => ({ code, message }))

export const DEFAULT_ERROR = error('GENERAL', 'Houve algum erro no servidor, tente novamente.')

export const throwErr = error => {
  throw new FWError(error)
}

const schemaErrorCode = error('SCHEMA_VALIDATION_FAILED', 'Verifique os campos com erros')
export const schemaError = R.assoc('fields', R.__, schemaErrorCode)
