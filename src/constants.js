// Lexical Alphabet
const AtoZ = 'abcdefghijklmnopqrstuvwxyz'
const DEFAULT_ALPHABET = `${AtoZ.toUpperCase()}${AtoZ.toLowerCase()}01234567890 ._-+=/\\;:'"!@#$%^&*()`

/**
 * Generate one row of a Vigenère square
 * @param {string|string[]} alphabet Lexical Alphabet to generate using
 * @param {number} [offset] Offset to shift the row by
 * @returns {string[]}
 */
const generateRow = (alphabet = DEFAULT_ALPHABET, offset = 0) => Array.from(new Array(alphabet.length))
  .map((x, i) => alphabet[(i + offset) % alphabet.length])

/**
 * Generate a full Vigenère square
 * @param {string} alphabet Lexical Alphabet to generate using
 * @returns {(string[])[]}
 */
const generateSquare = (alphabet = DEFAULT_ALPHABET) => Array.from(new Array(alphabet.length)).map((x, i) => generateRow(alphabet, i))

module.exports = { DEFAULT_ALPHABET, generateSquare, generateRow }
