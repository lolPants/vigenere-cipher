/* eslint max-nested-callbacks: 0 */
// Test Suites
const { describe, it } = require('mocha')
const { expect } = require('chai')

const { encode, decode } = require('../src/index.js')
const { generateRow, generateSquare } = require('../src/constants')

describe('encode()', () => {
  it('should be a function', () => {
    expect(encode).to.be.a('function')
  })

  describe('data types', () => {
    it('should return a string', () => {
      expect(encode('test', 'haha')).to.be.a('string')
    })

    describe(`input: 'plaintext'`, () => {
      it('should accept a string', () => {
        expect(() => { encode('test', 'haha') }).to.not.throw()
      })

      it('should not accept an array', () => {
        expect(() => { encode(['memes', 4, {}], 'haha') }).to.throw()
      })
    })
  })
})

describe('decode()', () => {
  it('should be a function', () => {
    expect(decode).to.be.a('function')
  })

  describe('data types', () => {
    it('should return a string', () => {
      expect(decode('test', 'haha')).to.be.a('string')
    })
  })
})

describe('generators', () => {
  describe('generateRow()', () => {
    it('should return an array', () => {
      expect(generateRow()).to.be.an('array')
    })
  })

  describe('generateSquare()', () => {
    it('should return an array', () => {
      expect(generateSquare()).to.be.an('array')
    })
  })
})
