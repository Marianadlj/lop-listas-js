//Considerando os seguintes valores para as variáveis a = 1.5, b = 4, c = 2, d = 3, e = 1.2 e f = 4.3, implemente um programa que determine e exiba os valores da expressão abaixo. Fique atento à precedência de operadores (1º multiplicação e divisão, 2º soma e subtração). Use a função Math.pow( ) para calcular as potências. A sintaxe é: Math.pow( b, x), onde b representa um número que é a base e x representa o expoente ao qual a base será elevada. Para elevar uma variável chamada b ao quadrado, use Math.pow( b, 2).

var a = 1.5;
var b = 4;
var c = 2;
var d = 3;
var e = 1.2;
var f = 4.3; 

var op = ( a + (Math.pow(c + d, 2) / Math.pow(b, 2)) * d ) * Math.pow(c, -1);

alert(op);