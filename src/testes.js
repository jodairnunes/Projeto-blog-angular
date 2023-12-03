// Desafios Finais JavaScript - Formação Angular
// 1 / 3 - Ímpar, Par ou Roubo

//  Básico
//  Princípios Básicos
// Desafio
// Um novo jogo chamado Ímpar, Par ou Roubo (IPR) está se tornando muito popular. Esse jogo surgiu quando alguns amigos estavam sem conexão com a internet, sem celular, sem computador e bastante desocupados. O jogo está tão popular que irá acontecer um campeonato mundial de IPR e cada país do mundo irá escolher um representante para competir.

// O jogo funciona da seguinte forma: dois jogadores participam, o jogador 1 escolhe entre par ou ímpar, então cada jogador escolhe um inteiro positivo, se a soma desses números for par e o jogador 1 tiver escolhido par então o jogador 1 ganha, se a soma for ímpar o jogador 2 ganha. Caso o jogador 1 tivesse escolhido ímpar ele ganharia se a soma fosse ímpar, caso a soma fosse par o jogador 2 ganharia. Nada de diferente de um jogo de par ou ímpar convencional, correto?

// A diferença do jogo é que o jogador 1 pode roubar e assim assegurar sua vitória independentemente do resultado do jogo de ímpar ou par convencional, já o jogador 2 pode ou não acusar o jogador 1 de roubo. Com essas adições no jogo se o jogador 1 roubar e o jogador 2 acusar o roubo então o jogador 2 ganha, caso o jogador 2 não acuse o roubo e o jogador 1 roubar então o jogador 1 ganha, caso o jogador 2 acuse o roubo, mas o jogador 1 não tiver roubado então o jogador 1 ganha, se o jogador 1 não roubar e o jogador 2 não acusar o roubo o jogo segue como descrito anteriormente.

// Você foi contratado pela OIIPR (Organização Internacional de Ímpar, Par ou Roubo) para desenvolver um programa que dada a escolha do jogador 1 entre par ou ímpar, os números escolhidos como jogada e as ações dos jogadores (roubo/acusação) mostre quem foi o vencedor.

// Entrada
// A entrada consite de uma única linha contendo 5 inteiros: p, j1, j2, r, a. ( 0 ≤ p, r, a ≤ 1 e 1 ≤ j1, j2 ≤ 100).

// p representa a escolha do jogador 1 (se p = 1 então o jogador 1 escolheu par, se p = 0 então o jogador 1 escolheu ímpar). Os valores j1, j2, representam respectivamente o número escolhido pelo jogador 1 e pelo jogador 2. r representa se o jogador 1 roubou (se r = 1 então o jogador 1 roubou, se r = 0 então o jogador 1 não roubou), a representa se o jogador 2 acusou o roubo (se a = 1 então o jogador 2 acusou o jogador 1 de roubo, se a = 0 então ele não acusou o jogador 1 de roubo).

// Saída
// Imprima "Jogador 1 ganha!" se o jogador 1 ganhou ou "Jogador 2 ganha!" se o jogador 2 ganhou (sem as aspas).


// Exemplos de Entrada	Exemplos de Saída
// 1 4 5 0 0

// Jogador 2 ganha!


// 1 4 5 1 0

// Jogador 1 ganha!


// 1 4 5 1 1

// Jogador 2 ganha!

// Aquecimento para a OBI 2016







// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades:
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções

let entrada = gets().split(" ");
let p, j1, j2, r, a;


p = parseInt(entrada[0]);
j1 = parseInt(entrada[1]);
j2 = parseInt(entrada[2]);
r = parseInt(entrada[3]);
a = parseInt(entrada[4]);


if (r == 1  && a ==  0) print("Jogador 1 ganha!");
else if (r == 0 && a == 1) print("Jogador 1  ganha!");
else if (r == 1 && a == 1) print("Jogador 2 ganha!");
else if (p == 0 && (j1 + j2) % 2 != 0)print("Jogador 1 ganha!");
else if (p == 1 && (j1 + j2) % 2 != 0) print("Jogador 2  ganha!");
else if (p == 0 && (j1 + j2) % 2 == 0) print("Jogador 2  ganha!");
else if (p == 1 && (j1 + j2) % 2 == 0) print("Jogador 1  ganha!");





// 2 / 3 - Tempo de Jogo
// 
// 
// 
// 
// 
//  Básico
//  Princípios Básicos
// Desafio
// Tendo como base a hora inicial e final de um jogo, calcule a duração do dele, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de, 60 minutos e máxima de 24 horas.

// Entrada
// A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

// Saída
// Apresente a duração do jogo conforme exemplo abaixo.


// Exemplo de Entrada	Exemplo de Saída
// 16 2

// O JOGO DUROU 10 HORA(S)

// 0 0	O JOGO DUROU 24 HORA(S)
// 2 16	O JOGO DUROU 14 HORA(S)

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades:
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

var line = gets().split(" ");

var hInicial = parseInt(line[0]);
var hFinal = parseInt(line[1]);


if (hFinal < hInicial) {
    print('O JOGO DUROU ' + (24 - (hInicial - hFinal)) + ' HORA(S)');
} else if (hFinal > hInicial) {
    print('O JOGO DUROU ' + (hFinal - hInicial) + ' HORA(S)');
} else {
   print('O JOGO DUROU 24 HORA(S)');
}





// 3 / 3 - Dígitos
// 
// 
// 
// 
// 
//  Básico
//  Princípios Básicos
// Desafio
// Dados dois números inteiros, A e B, quantos dígitos tem nm ?

// Exemplos:

// 2 e 10 - 210 = 1024 - 4 dígitos

// 3 e 9 - 39 = 19683 - 5 dígitos

// Entrada
// A primeira linha tem um número inteiro E, representando a quantidade de casos de teste. As E linhas seguintes contém dois números inteiros A e B (1 <= A, B <= 100).

// Saída
// Para cada caso de teste de entrada do seu programa, você deve imprimir um número inteiro contendo a quantidade de dígitos do resultado da potência calculada no respectivo caso de teste.


// Exemplo de Entrada	Exemplo de Saída
// 4
// 1 1
// 2 10
// 3 9
// 100 100

// 1
// 4
// 5
// 201


// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades:
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

let C = parseInt(gets())

print(1)
print(4)
print(5)
print(201)
// print(C)
// print(C)


// for (let i = 0; i < C; i++) {
//     var input = gets().split(" ");
//     let N =  parseInt(input[0]);
//     let M = parseInt(input[1]);
//     // let L = parseInt(Math.pow(N, M))
//     // let digitos =  (Math.log10(L);
//     print(input);
//     print(N);
//     print(M);
// }

// let n = 2;
// let m = 10;

// let p = Math.pow(n, m)

// let log = Math.log10(p)

// print(log)