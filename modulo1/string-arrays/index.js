// Exercício de interpretação de códigos


//1). Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// let array
// console.log('a. ', array)

// array = null
// console.log('b. ', array)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// let i = 0
// console.log('d. ', array[i])

// array[i + 1] = 19
// console.log('e. ', array)

// const valor = array[i + 6]
// console.log('f. ', valor)

//resposta
/*
a.  undefined
b.  null
c.  11
d.  3
e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f.  9
*/

//2).Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//resposta: SUBI NUM ÔNIBUS EM MIRROCOS 27


//Exercícios de escrita de código

//1). Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
/*   
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!


const nome = prompt("Insira seu nome")
const email = prompt("Insira seu email")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem vindo(a), ${nome} !`)
*/

/*
2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
*/

//const comida = ["frutas", "churrasco", "lasanha", "sorvete", "doces"]

//a)
//console.log(comida)

//b)
//console.log(`Essas são minhas comidas favoritas: ${comida}`)

//c)

//const comidaDoUsuario = prompt("Informe sua comida favorita")
//comida[1] = comidaDoUsuario

//console.log(comida)


//3);
// a) Crie um array vazio e guarde - o em uma variável, chamada `listaDeTarefas`

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene - as, uma por uma, no array

// c) Imprima o array no console

// d) Peça ao usuário que digite o ** índice ** de uma tarefa que ele já realizou: 0, 1 ou 2

// e) Remova da lista o item de índice que o usuário escolheu.

// f) Imprima o array no console


//a)
/*
const tarefa1 = prompt("Insira a primeria terefa")
const tarefa2 = prompt("Insira a segunda tarefa")
const tarefa3 = prompt("Insira a terceira tarefa")
const listaDeTarefas = [tarefa1, tarefa2, tarefa3]
const indices = prompt("Insira um índice(0,1 ou 2)")
const indiceMenos = listaDeTarefas.slice(indices, 2)


console.log(listaDeTarefas)
console.log(indiceMenos)
*/

/*- Desafios
1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

const frase = prompt("Insira uma frase")
const elementos = frase.split(/[\s,]+/);
console.log(elementos);
*/

/*
2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
*/

// const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// const elemento = prompt("Insira a fruta")

//console.log(elemento.indexof(frutas))