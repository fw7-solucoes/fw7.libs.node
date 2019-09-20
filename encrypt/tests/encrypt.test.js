import encrypt from '../src/index'

var password = 'myPassword'
var privateKey = 'Secret privateKey'

describe('crypt', () => {
  test('should return a 64 characters hash', () => {
    var encrypted = encrypt(privateKey, password)

    expect(encrypted).toHaveLength(64)
  })

  test('should always return the same hash', () => {
    var encrypted = encrypt(privateKey, password)
    var encryptedNew = encrypt(privateKey, password)

    expect(encrypted).toBe(encryptedNew)
  })

  test('should return different hash when keys are not the same', () => {
    var hash = encrypt(privateKey, password)
    var otherHash = encrypt('otherPrivateKey', password)

    expect(hash).not.toBe(otherHash)
  })
})
