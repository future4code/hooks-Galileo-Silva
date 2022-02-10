// Exercício1

/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)
*/
/*
Resposta:
a. false
b. false
c. true
d. boolean
*/

// Exercício2
/*
let primeiroNumero = prompt("Digite um número!")
let segundoNumero = prompt("Digite outro número!")

let soma = parseInt(primeiroNumero) + parseInt(segundoNumero)

console.log(soma)
*/

// Exercício de escrita de código
//1)
/*
let idade = prompt("Digite sua idade:")
let idadeAmigo = prompt("Digite a idade do seu melhor amigo(a):")
let comparIdade = idade > idadeAmigo

console.log(`Sua idade é maior do que a do seu amigo: ${comparIdade} `)

console.log(`Adiferença de idade entre você e seu amigo é de ${idade - idadeAmigo} anos!`)
*/

//2)
/*
let numPar = prompt("Insira um número par:")
 console.log(numPar%2)
*/

//3)
/*
let idade = prompt("Insira sua idade:")

console.log(`Sua idade em meses é :${idade*12} meses`)

console.log(`Sua idade em dias é: ${idade*365} dias`)

console.log(`Sua idade em horas é: ${365*idade*24} horas`)
*/

//4)
/*
let num1 = prompt("Insira o primeiro número:")
let num2 = prompt("Insira o segundo número:")

console.log(`O primeiro número é maior que o segundo? ${num1 > num2}`)

console.log(`O primeiro número é igual ao segundo? ${num1===num2}`)

console.log(`O primeiro número é divisível pelo segundo? ${num1%num2===0}`)

console.log(`O segundo número é divisível pelo primeiro? ${num2%num1===0}`)
*/

//Desafios

//a)
/*
let far = 77
let kel = (far-32)*(5/9)+273.15

console.log(kel)
*/

//b)
/*
let cel = 80
let far = (cel)*(9/5)+32

console.log(far)
*/

//c)
/*
let cel = 30
let far = (cel)*(9/5)+32
let kel = (far-32)*(5/9)+273.15

console.log("Resultado em Far", far)
*/

//d)
/*
let cel = prompt("Insira a temperatura em Celsius:")
let far = (cel)*(9/5)+32
let kel = (far-32)*(5/9)+273.15

console.log("Resultado em Far", far)
*/

//2.
/*
let quiloHora = 0.05

//a)

console.log(quiloHora*280, "Reais")

//b)

console.log((15/100)*(quiloHora*280))
*/

//3.
//a)
/*
let lb = prompt("Insira a quantidade de Libras:")
let kg = lb/(2.2046)

console.log( lb, "lb equivalem a ", kg,"kg")
*/

//b)
/*
let oz = prompt("Insira a quantidade de Onça(oz):")
let kg = oz/(35.274)

console.log( oz, "oz equivalem a ", kg,"kg")
*/

//c)
/*
let mi = prompt("Insira a quantidade de Milhas:")
let me = mi/(0.00062137)

console.log( mi, "Milhas equivalem a ", me,"metros")

//resp: 100 Milhas equivalem a  160934.70878864444 metros
*/

//d)
/*
let ft = prompt("Insira a quantidade de Pés:")
let me = ft/(3.2808)

console.log( ft, "Pés equivalem a ", me,"metros")

//Resp:50 Pés equivalem a  15.240185320653499 metros
*/

//e)
/*
let gal = prompt("Insira a quantidade de Galão:")
let lit = gal/(3.785411784)

console.log( gal, "Galões equivalem a ", lit,"litros")
*/
//resp: 103.56 Galões equivalem a  27.357657742209852 litros

//f)
/*
let xic = prompt("Insira a quantidade de Xícaras:")
let lit = xic*(0.24)

console.log( xic, "Xícaras equivalem a ", lit,"litros")

//resp: 450 Xícaras equivalem a  108 litros
*/
//g)
/*
Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter
*/





