// Test Suites
const { describe, it } = require('mocha')
const { expect } = require('chai')

const { encode, decode } = require('../src/index.js')

describe('encode()', () => {
  it('should be a function', () => {
    expect(encode).to.be.a('function')
  })
})
