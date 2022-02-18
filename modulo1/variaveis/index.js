//Exercício interpretação de código

//(1)
/*
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

*/

//resp: 10
//      10 5

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
/*let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")

let proventoDia = prompt("Quanto você recebe por dia?")


alert(`Você recebe ${proventoDia/horasTrabalhadas} por hora`)
*/

//Desafio

let num1 = prompt("Insira o primeiro número:")
let num2 = prompt("Insira o segundo número:")
let soma = parseInt(num1) + parseInt(num2)

alert(`O primeiro número somado ao segundo resulta em: ${soma}
O primeiro número multiplicado pelo segundo resulta em: ${num1*num2}`)