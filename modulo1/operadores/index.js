// Exercício de interpretação de código

//1).Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado)

// resultado = !resultado && (bool1 || bool2)
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)
/*
Resposta:
a. false
b. false
c. true
d. boolean
*/

//2).Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//Erro = A lógica está concatenando

//3).Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

// let primeiroNumero = prompt("Digite um número!")
// let segundoNumero = prompt("Digite outro número!")

// let soma = parseInt(primeiroNumero) + parseInt(segundoNumero)

// console.log(soma)

// Exercícios de escrita de código
//1). Faça um programa que:

// a) Pergunte a idade do usuário

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

// c) ** Imprima na console ** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta(`true`
// ou `false`)

// d) ** Imprima na console ** a diferença de idade(não tem problema se sair um número negativo)

// let idade = prompt("Digite sua idade:")
// let idadeAmigo = prompt("Digite a idade do seu melhor amigo(a):")
// let comparIdade = idade > idadeAmigo

// console.log(`Sua idade é maior do que a do seu amigo: ${comparIdade} `)

// console.log(`Adiferença de idade entre você e seu amigo é de ${idade - idadeAmigo} anos!`)

//20. Faça um programa que:

// a) Peça ao usuário que insira um número ** par **

// b) Imprima na console ** o resto da divisão ** desse número por 2.

// c) Teste o programa com diversos números pares.Você notou um padrão ? Escreva em um comentário de código.
// A saída sempre é 0
// d) O que acontece se o usuário inserir um número ímpar ? Escreva em um comentário de código
//A saída sem pre é 1
// let numPar = prompt("Insira um número par:")
// console.log(numPar % 2)

//3). Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

// a) A idade do usuário em meses

// b) A idade do usuário em dias

// c) A idade do usuário em horas

// let idade = prompt("Insira sua idade:")
// console.log(`Sua idade em meses é :${idade*12} meses`)
// console.log(`Sua idade em dias é: ${idade*365} dias`)
// console.log(`Sua idade em horas é: ${365*idade*24} horas`)

//4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

// a).O primeiro numero é maior que segundo ? true
// b).O primeiro numero é igual ao segundo ? false
// c).O primeiro numero é divisível pelo segundo ? true
// d).O segundo numero é divisível pelo primeiro ? true

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.

/*
let num1 = prompt("Insira o primeiro número:")
let num2 = prompt("Insira o segundo número:")

console.log(`O primeiro número é maior que o segundo? ${num1 > num2}`)

console.log(`O primeiro número é igual ao segundo? ${num1===num2}`)

console.log(`O primeiro número é divisível pelo segundo? ${num1%num2===0}`)

console.log(`O segundo número é divisível pelo primeiro? ${num2%num1===0}`)
*/

//Desafios
//1).
//a)Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
/*
let far = 77
let kel = (far-32)*(5/9)+273.15

console.log(kel)
*/

//b)Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
/*
let cel = 80
let far = (cel)*(9/5)+32

console.log(far)
*/

//c)Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
/*
let cel = 30
let far = (cel)*(9/5)+32
let kel = (far-32)*(5/9)+273.15

console.log("Resultado em Far", far)
*/

//d)Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
/*
let cel = prompt("Insira a temperatura em Celsius:")
let far = (cel)*(9/5)+32
let kel = (far-32)*(5/9)+273.15

console.log("Resultado em Far", far)
*/

//2.
/*
let quiloHora = 0.05

//a)Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

console.log(quiloHora*280, "Reais")

//b)Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto

console.log((15/100)*(quiloHora*280))
*/

//3.
//a)Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma:
/*
let lb = prompt("Insira a quantidade de Libras:")
let kg = lb/(2.2046)

console.log( lb, "lb equivalem a ", kg,"kg")
*/

//b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
/*
let oz = prompt("Insira a quantidade de Onça(oz):")
let kg = oz/(35.274)

console.log( oz, "oz equivalem a ", kg,"kg")
*/

//c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma:
/*
let mi = prompt("Insira a quantidade de Milhas:")
let me = mi/(0.00062137)

console.log( mi, "Milhas equivalem a ", me,"metros")

//resp: 100 Milhas equivalem a  160934.70878864444 metros
*/

//d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma:
/*
let ft = prompt("Insira a quantidade de Pés:")
let me = ft/(3.2808)

console.log( ft, "Pés equivalem a ", me,"metros")

//Resp:50 Pés equivalem a  15.240185320653499 metros
*/

//e)Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
/*
let gal = prompt("Insira a quantidade de Galão:")
let lit = gal/(3.785411784)

console.log( gal, "Galões equivalem a ", lit,"litros")
*/
//resp: 103.56 Galões equivalem a  27.357657742209852 litros

//f)Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma:
/*
let xic = prompt("Insira a quantidade de Xícaras:")
let lit = xic*(0.24)

console.log( xic, "Xícaras equivalem a ", lit,"litros")

//resp: 450 Xícaras equivalem a  108 litros
*/
//g) Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter