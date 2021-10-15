//Agora vamos fazer nosso primeiro aplicativo de fato. Será um programa que é capaz de calcular o Índice de Massa Corporal (IMC) de uma pessoa. Ele recebe na entrada a massa em quilos e a altura em metros de uma pessoa. A resposta de saída deve seguir o formato exato do quadro a direita do enunciado (onde está o exemplo de entrada e saída).

var p = prompt("Informe seu peso");
var a = prompt("Informe sua altura");

var imc = p / (a ** 2);

alert("IMC: " + imc);