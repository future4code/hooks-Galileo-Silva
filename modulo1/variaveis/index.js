//Exercício interpretação de código

//(1)

// let a = 10
// let b = 10

// console.log(b)

// //resp: 10 

// b = 5
// console.log(a, b)

// //resp: 10 5


//(2)
/*
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
*/
//resp: 10 10 10

//(3)
// let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
// let proventoDia = prompt("Quanto você recebe por dia?")

// alert(`Você recebe ${proventoDia/horasTrabalhadas} por hora`)

//Exrcício de escrita de código

//1.)1. Construa um programa, seguindo os seguintes passos:

// a) Declare uma variável para armazenar um nome, sem atribuir um valor.

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.


//const nome = prompt("Informe seu nome")
// console.log(typeof nome)

//const idade = prompt("Informe sua idade")
// console.log(typeof idade)

//console.log(typeof nome, typeof idade)

//f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

//Mesmo inserindo um 'Number' na idade foi recebido uma 'String'

//g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu

//console.log(`Olá ${nome},  você tem ${idade} anos`)

//2). Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

//a) Crie três novas variáveis, contendo as respostas

//b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. 

// const roupa = prompt("Você está usando roupa azul hoje?(sim ou não)")
// const chapeu = prompt("Você está usando chapéu no momento?(sim ou não)")
// const calçado = prompt("Você está usando algumtipo de calçado no momento?(sim ou não)")

// const roupaR = "Você está usando roupa azul hoje?"
// const chapeuR = "Você está usando chapéu no momento?"
// const calçadoR = "Você está usando algumtipo de calçado no momento?"

// console.log(roupaR, roupa)
// console.log(chapeuR, chapeu)
// console.log(calçadoR, calçado)

//3). 3. Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial

// let a = 10
// let b = 25

//Agora, queremos trocar os valores delas, de forma que a passe a ter o valor de b e b passe a ter o valor de a.
//Ou seja, no caso desse exemplo acima,
//a passaria a ser 25 e b passaria a ser 10.

// let aux = a

// a = b
// b = aux

// console.log(a, b)

//Desafio

// let num1 = prompt("Insira o primeiro número:")
// let num2 = prompt("Insira o segundo número:")
// let soma = parseInt(num1) + parseInt(num2)

// alert(`
//O primeiro número somado ao segundo resulta em: $ { soma }
// O primeiro número multiplicado pelo segundo resulta em: ${num1*num2}`)