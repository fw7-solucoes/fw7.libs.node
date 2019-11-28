import { schemaError } from './common'
import { handleDBError } from './index'

describe('sequelize', () => {
  test('should throw default error when errors prop is null', () => {
    expect(() => handleDBError({ errors: null })).toThrow('Houve algum erro no servidor, tente novamente.')
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
