const expect = require('chai').expect;
const formatFullname = require('../formatFullname.js'); 

describe('FormatFullname', () => {
  it('should return an error if fullName is empty', () => {
    expect(formatFullname('')).to.equal('Error');
  })

  it('should return an error if fullName is not a String', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(123)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
    
  })

  it('should return an error if fullName is not a 2 words', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  })

  it('should return an error if fullName not contains letters only', () => {
    expect(formatFullname('John 123')).to.equal('Error');
    expect(formatFullname('123 Doe')).to.equal('Error');
  })

});