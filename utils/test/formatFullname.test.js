const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {

  // jeśli nie podano nic, to funkcja powinna zwrócić tekst Error,
  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname()).to.equal('Error');
    expect(formatFullname(null)).to.equal('Error');
  });

  // jeśli podano coś innego niż string, to funkcja powinna zwrócić tekst Error,
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');//   
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  // jeśli format otrzymanych danych jest inny niż <firstname> <lastname>, 
  // czyli np. podano coś więcej po kolejnej spacji (John Doe Test) albo podano tylko imię lub tylko nazwisko (np. tylko John),
  // to funkcja również powinna zwrócić Error.
  it('should return an error if "fullName" arg is different than <firstname> <lastname>', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error'); 
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('ptihjkne4p5i6bu\"4635$#%#$^5ab;o8y\'a6')).to.equal('Error');    
  });

  it('should return a proper Firstname-Lastname format even when "fullName" \
    arg uses randomly upper and lower cases', () => {
    expect(formatFullname('John Doe')).to.equal('John Doe'); 
    expect(formatFullname('JOHN DOE')).to.equal('John Doe'); 
    expect(formatFullname('JOHN doE')).to.equal('John Doe'); 
    expect(formatFullname('john dOe')).to.equal('John Doe');   
  });

});