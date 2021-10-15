//Escreva um programa que recebe um número real referente a uma medida em metros e imprima esta medida em: pés, jardas e milhas. Considere que um pé equivale à 0.3048 metros; Uma jarda equivale à 0.9144 metros; Uma milha equivale à 1604.38 metros. Nessa questão, você deverá imprimir uma resposta de saída abaixo da outra. Para isso, use o comando +"\n" dentro do alert( ), exatamente no final do texto que você vai escrever. Por exemplo: alert("alo mundo"+"\n"); que vai exibir a frase seguida de um pulo de linha, tal como o efeito do ENTER.

var m = prompt();
var p = m / 0.3048;
var j = m / 0.9144;
var mi = m / 1604.38;

alert("pes: " + p +"\njardas: " + j + "\nmilhas: " + mi);