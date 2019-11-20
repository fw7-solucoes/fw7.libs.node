import { error } from '../src/index'

describe('common', () => {
  describe('error', () => {
    test('should return an object containing message and code props', () => {
      const result = error('myCode', 'myMessage')

      expect(result).toMatchObject({ code: 'myCode', message: 'myMessage' })
    })
  })
})
