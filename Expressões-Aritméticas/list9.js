// Escreva um programa que recebe na entrada número inteiro de horas. Crie uma variável chamada horas para receber o número. Use o comando prompt( ) para receber o número. Use o expressão abaixo para guardar o número digitado em horas:  horas = prompt("digite as horas");

// O programa deve converter essas horas em dias. Depois ele deve imprimir a resposta. Ex.: 60 horas = 2.5 dias. Lembre que um dia tem 24 horas. Nesse exemplo serão testados vários valores de entrada. Veja na área de execução (abaixo do botão executar).

var horas = parseInt(prompt("Digite as horas"));
var dias = horas / 24;
alert(dias);