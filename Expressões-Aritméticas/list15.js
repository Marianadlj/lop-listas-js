//Considerando os seguintes valores para as variáveis a = 1.5, b = 4, c = 2, implemente um programa que determine e exiba os valores da expressão abaixo. Fique atento a precedência de operadores: as funções de potência e a raiz são resolvidas antes da multiplicação/divisão. Para o calculo da raiz quadrada use a função Math.sqrt( x), onde x é um número cuja raiz quadrada será extraída. Se você fizer x = Math.sqrt(4) o resultado na variável x será sempre 2.

var a = 1.5;
var b = 4;
var c = 2;

var op = ((-b) + Math.sqrt(Math.pow(b,2) - (4 * a * c))) / 2 ;

alert(op);