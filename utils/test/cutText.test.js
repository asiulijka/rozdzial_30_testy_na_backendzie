const cutText = require('../cutText.js');
const expect = require('chai').expect;

describe('CutText', () => {

  // Jeśli argument content nie jest stringiem, to funkcja powinna zwrócić Error
  it('should return an error if "content" arg is not a string', () => {
    expect(cutText(undefined, 20)).to.equal('Error');
    expect(cutText(12, 20)).to.equal('Error');
    expect(cutText({}, 20)).to.equal('Error');
    expect(cutText([], 20)).to.equal('Error');
    expect(cutText(function() {}, 20)).to.equal('Error');
  });

  // Jeśli długość tekstu w content jest równa 0, to funkcja powinna zwrócić Error.
  it('should return an error if "content" arg length is 0', () => {
    expect(cutText('', 20)).to.equal('Error');
  });

  // Jeśli maxLength nie jest liczbą, to funkcja powinna zwrócić Error.
  it('should return an error if "maxLength" arg is not a number', () => {
    expect(cutText('Lorem Ipsum', undefined)).to.equal('Error');
    expect(cutText('Lorem Ipsum', 'abc')).to.equal('Error');
    expect(cutText('Lorem Ipsum', {})).to.equal('Error');
    expect(cutText('Lorem Ipsum', [])).to.equal('Error');
    expect(cutText('Lorem Ipsum', function() {})).to.equal('Error');
  });

  // Jeśli maxLength jest mniejsze od zera lub równe zero, to funkcja powinna zwrócić Error.
  it('should return an error if "maxLength" is lower or equal 0', () => {
    expect(cutText('Lorem Ipsum', 0)).to.equal('Error');
    expect(cutText('Lorem Ipsum', -6)).to.equal('Error');
  });

  // Jeśli content i maxLength są poprawne i maxLength jest większe lub równe content.length, 
  // to funkcja powinna zwrócić content bez żadnych zmian.
  it('should return "content" without changes if proper args', () => {
    expect(cutText('Lorem Ipsum', 40)).to.equal('Lorem Ipsum');
    expect(cutText('Lorem Ipsum', 11)).to.equal('Lorem Ipsum');
  });  
  
  // Jeśli content i maxLength są poprawne i maxLength jest mniejsze od content.length, 
  // to funkcja powinna zwrócić tekst przycięty do maxLength ilości znaków. 
  // Przy czym przycięcie nie może nastąpić w środku słowa. Jeśli miałoby tak być, to funkcja powinna zwrócić tekst przycięty przed tym niepełnym słowem.
   
  // Jeśli content i maxLength są poprawne i maxLength jest mniejsze od content.length, 
  // to funkcja powinna zwrócić na końcu tekstu ....

  it('should return good cut "content" if proper args', () => {
    expect(cutText('Lorem Ipsum dolor sit amet', 14)).to.equal('Lorem Ipsum...');
    expect(cutText('Lorem Ipsum dolor sit amet', 5)).to.equal('Lorem...');
    expect(cutText('Lorem Ipsum dolor sit amet', 17)).to.equal('Lorem Ipsum dolor...');
  });
});