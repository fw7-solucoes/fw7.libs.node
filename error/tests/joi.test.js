import { handleJoiError } from '../src/index'

const validate = jest.fn(({ name }) => (
  name
    ? Promise.resolve({ error: null })
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
    const error = JSON.stringify([{
      type: 'Field',
      message: 'name is required',
      field: 'name'
    }])

    const validationPromise = handleError({})

    await expect(validationPromise).rejects.toThrow(error)
  })

  test('should return null when validation complete successfully', async () => {
    const validationPromise = handleError({ name: 'jhon' })

    await expect(validationPromise).resolves.not.toThrow()
  })
})
