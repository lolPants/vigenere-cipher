const { DEFAULT_ALPHABET } = require('./constants')

const generateSet = (alphabet = DEFAULT_ALPHABET, offset = 0) => Array.from(new Array(alphabet.length)).map((x, i) => alphabet[(i + offset) % alphabet.length])
const generateMap = (alphabet = DEFAULT_ALPHABET) => Array.from(new Array(alphabet.length)).map((x, i) => generateSet(alphabet, i))

/**
 * Encode using a Vigenère cipher
 * @param {string} plaintext Plaintext to encode
 * @param {string} key Cryptographic Cipher Key
 * @param {string|string[]} [alphabet] Lexical Alphabet
 * @returns {string}
 */
const encode = (plaintext, key, alphabet = DEFAULT_ALPHABET) => {
  let map = generateMap(alphabet)
  return plaintext.split('').reduce((a, c, i) => `${a}${map[alphabet.indexOf(key[i % key.length])][alphabet.indexOf(c)]}`, '')
}

/**
 * Decode using a Vigenère cipher
 * @param {string} ciphertext Cipher text to decode
 * @param {string} key Cryptographic Cipher Key
 * @param {string|string[]} [alphabet] Lexical Alphabet
 * @returns {string}
 */
const decode = (ciphertext, key, alphabet = DEFAULT_ALPHABET) => {
  let map = generateMap(alphabet)

  return ciphertext.split('').reduce((a, c, i) => {
    let row = map[alphabet.indexOf(key[i % key.length])]
    return `${a}${alphabet[row.indexOf(c)]}`
  }, '')
}

// console.log(encode('i fucking love memes', 'haha content'))
console.log(decode('+E.:G."$#I@A^4L.I-\\(', 'haha content'))
