import { handleDBError } from '../src/index'

describe('sequelize', () => {
  test('should throw default error when errors prop is null', () => {
    const error = JSON.stringify([{ type: 'General', message: 'Houve algum erro no servidor, tente novamente.' }])

    expect(() => handleDBError({ errors: null })).toThrow(error)
  })
})
