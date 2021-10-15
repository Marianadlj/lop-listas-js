//Você viu que a ausência de parêntesis muda a o resultado da equação. Sem eles, as operações e multiplicação são resolvidas primeiro. Só depois é resolvida a soma. Agora considere os seguintes valores para as variáveis a = 1.5, b = 4, c = 2, d = 3. Implemente um programa que determine e exiba os valores da seguinte expressão: a×(c+d)/b

​var a = 1.5;
var b = 4;
var c = 2;
var d = 3;

var oper = (a * (c + d)) / b;
alert(oper);
