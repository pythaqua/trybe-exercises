/*
A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5,
retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o
próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
*/

const myFizzBuzz = require('../exercise-1/4-myFizzBuzz');

describe('myFizzBuzz', () => {
  it('myFizzBuzz(15) retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('myFizzBuzz(6) retorna "fizz"', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  it('myFizzBuzz(10) retorna "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('myFizzBuzz(8) retorna 8', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });
  it('myFizzBuzz("9") retorna false', () => {
    expect(myFizzBuzz('9')).toBe(false);
  });
});
