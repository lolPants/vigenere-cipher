const { DEFAULT_ALPHABET, generateSquare } = require('./constants')
const { invalid } = require('./errors')

/**
 * Encode using a Vigenère cipher
 * @param {string} plaintext Plaintext to encode
 * @param {string} key Cryptographic Cipher Key
 * @param {string|string[]} [alphabet] Lexical Alphabet
 * @returns {string}
 */
const encode = (plaintext, key, alphabet = DEFAULT_ALPHABET) => {
  console.log(typeof alphabet !== 'string', Array.isArray(alphabet), typeof alphabet !== 'string' || Array.isArray(alphabet))
  if (typeof plaintext !== 'string') throw invalid.plaintext
  if (typeof key !== 'string') throw invalid.key
  if (typeof alphabet !== 'string' && !Array.isArray(alphabet)) throw invalid.alphabet

  let map = generateSquare(alphabet)
  return plaintext.split('').reduce((accumulator, letter, i) => {
    let plainIndex = alphabet.indexOf(letter)
    let keyIndex = alphabet.indexOf(key[i % key.length])

    return `${accumulator}${map[keyIndex][plainIndex]}`
  }, '')
}

/**
 * Decode using a Vigenère cipher
 * @param {string} ciphertext Cipher text to decode
 * @param {string} key Cryptographic Cipher Key
 * @param {string|string[]} [alphabet] Lexical Alphabet
 * @returns {string}
 */
const decode = (ciphertext, key, alphabet = DEFAULT_ALPHABET) => {
  if (typeof ciphertext !== 'string') throw invalid.inv
  if (typeof key !== 'string') throw invalid.key
  if (typeof alphabet !== 'string' || Array.isArray(alphabet)) throw invalid.alphabet

  let map = generateSquare(alphabet)
  return ciphertext.split('').reduce((accumulator, letter, i) => {
    let row = map[alphabet.indexOf(key[i % key.length])]
    return `${accumulator}${alphabet[row.indexOf(letter)]}`
  }, '')
}

module.exports = { encode, decode }
