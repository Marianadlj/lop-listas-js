//Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final deste aluno. Considera que a média é ponderada e que o peso de cada nota é: 2, 3 e 5, respectivamente.

var nota1 = prompt();
var nota2 = prompt();
var nota3 = prompt();

nota1 = (nota1 * 2);
nota2 = (nota2 * 3);
nota3 = (nota3 * 5); 
var media = (nota1 + nota2 + nota3) / 10;

alert(media);