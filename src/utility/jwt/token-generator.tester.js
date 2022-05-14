// from https://gist.github.com/ziluvatar/a3feb505c4c0ec37059054537b38fc48
/**
 * Just few lines to test the behavior.
 */

const jwt = require('jsonwebtoken')

const TokenGenerator = require('./token-generator')

const tokenGenerator = new TokenGenerator('a', 'a', {
  algorithm: 'HS256',
  keyid: '1',
  noTimestamp: false,
  expiresIn: '2m',
  notBefore: '2s',
})
token = tokenGenerator.sign(
  { myclaim: 'something' },
  { audience: 'myaud', issuer: 'myissuer', jwtid: '1', subject: 'user' }
)
setTimeout(function () {
  token2 = tokenGenerator.refresh(token, {
    verify: { audience: 'myaud', issuer: 'myissuer' },
    jwtid: '2',
  })
  // eslint-disable-next-line no-console
  console.log(jwt.decode(token, { complete: true }))
  // eslint-disable-next-line no-console
  console.log(jwt.decode(token2, { complete: true }))
}, 3000)
