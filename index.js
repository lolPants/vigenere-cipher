const { DEFAULT_ALPHABET } = require('./constants')

const generateSet = (alphabet = DEFAULT_ALPHABET) => Array.from(new Array(alphabet.length)).map((x, i) => alphabet[i])
const generateMap = (alphabet = DEFAULT_ALPHABET) => Array.from(new Array(alphabet.length)).map(() => generateSet(alphabet))

console.log(generateMap('abcd'))
