module.exports = {
  invalid: {
    plaintext: new Error(`Invalid argument 'plaintext': string expected.`),
    ciphertext: new Error(`Invalid argument 'ciphertext': string expected.`),
    key: new Error(`Invalid argument 'key': string expected.`),
    alphabet: new Error(`Invalid argument 'alphabet': string or char[] expected.`),
  },
}
