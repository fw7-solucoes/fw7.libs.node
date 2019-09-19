import { error, interceptError } from '../src/index'

describe('common', () => {
  describe('error', () => {
    test('should return an object containing message and type props', () => {
      const result = error('myType', 'myMessage')

      expect(result).toMatchObject({ type: 'myType', message: 'myMessage' })
    })
  })
})
