// Test Suites
const { describe, it } = require('mocha')
const { expect } = require('chai')

const { encode, decode } = require('../src/index.js')

describe('encode()', () => {
  it('should be a function', () => {
    expect(encode).to.be.a('function')
  })

  describe('data types', () => {
    it('should return a string', () => {
      expect(encode('test', 'haha')).to.be.a('string')
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
