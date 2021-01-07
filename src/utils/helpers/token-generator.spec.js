const jwt = require('jsonwebtoken')

class TokenGenerator {
  async generate (id) {
    return jwt.sign(id, 'secret')
  }
}

describe('Token Generator', () => {
  test('Should return null if JMT returns null', async () => {
    const sut = new TokenGenerator()
    jwt.token = null
    const token = await sut.generate('any_id')
    expect(token).toBeNull()
  })

  test('Should return a token if JMT returns token', async () => {
    const sut = new TokenGenerator()
    const token = await sut.generate('any_id')
    expect(token).toBe(jwt.token)
  })
})
