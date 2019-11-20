import { handleDBError } from '../src/index'

describe('sequelize', () => {
  test('should throw default error when errors prop is null', () => {
    expect(() => handleDBError({ errors: null })).toThrow('Houve algum erro no servidor, tente novamente.')
  })
})
