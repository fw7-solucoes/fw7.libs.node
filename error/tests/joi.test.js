import { handleJoiError } from '../src/index'

const validate = jest.fn(({ name }) => (
  name
    ? Promise.resolve({ error: null })
    // eslint-disable-next-line prefer-promise-reject-errors
    : Promise.reject({
      details: [{
        message: 'name is required',
        context: { key: 'name' }
      }]
    })
))
const handleError = handleJoiError({ validate })

describe('joi', () => {
  test('should format the errors before throw exception when validation fails', async () => {
    const validationPromise = handleError({})

    await expect(validationPromise).rejects.toThrow('Verifique os campos com erros')
  })

  test('should return null when validation complete successfully', async () => {
    const validationPromise = handleError({ name: 'jhon' })

    await expect(validationPromise).resolves.not.toThrow()
  })
})
