import { handleDBError } from '../src'

describe('sequelize', () => {
  test('should throw original error when errors prop is null', () => {
    const error = new Error('test')
    expect(() => handleDBError(error)).toThrow(error)
  })

  test('should throw schema validation error when dbError is UK error', () => {
    const dbError = {
      errors: [{
        validatorKey: 'not_unique',
        path: 'email',
        value: 'test@gmail.com'
      }]
    }

    expect(() => handleDBError(dbError)).toThrow('Verifique os campos com erros')
  })
})
