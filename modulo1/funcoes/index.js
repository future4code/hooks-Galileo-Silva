// Exercício de interpretação de código

//1)
/*
function minhaFuncao(variavel) {
	return variavel * 5
}

//console.log(minhaFuncao(2))
//console.log(minhaFuncao(10))

//a)resp 10 - 50
//b)nada aconteceria
*/

//2)
/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
*/
//a)Essa função tem a finalinelidade de verificar se na entrada contém a string "cenoura"

//b)i. true
//  ii.true
//  iii.true

//Exercícios de escrita de código

//a)
/*
function imprimirFrase(){
console.log("Eu sou Galileo, tenho 38 anos, moro em Recife e sou estudante")
}
imprimirFrase()
*/
//b)
/*
function informacoesPessoais(){
    let nome = prompt("Insira seu nome")
    let idade = prompt("Insira sua idade")
    let cidade = prompt("Insira sua cidade")
    let profissao = prompt("Insira sua profissão")

    const nomeConv = nome.toString()
    const idadeConv = idade
    const cidadeConv = cidade.toString()
    const profissaoConv = profissao.toString()
               
    console.log(`Eu sou ${nomeConv}, tenho ${idadeConv} anos, moro em ${cidadeConv} e sou ${profissaoConv} `)

    }
    
    informacoesPessoais()
*/

//2).
//a).
/*
const num1 = 3
const num2 = 5
function minhaFuncao(variavel) {
	variavel = num1 + num2
    
    return variavel 
}

console.log(minhaFuncao())
*/
//b).
/*
const num1 = 5
const num2 = 5
function minhaFuncao(variavel) {
	variavel = num1 >= num2
    
    return variavel 
}

console.log(minhaFuncao())
*/
//c).
/*
const num1 = 6

function minhaFuncao(variavel) {
	variavel = num1 % 2 === 0
    
    return variavel 
}

console.log(minhaFuncao())
*/
//d).


/*
function minhaFuncao(variavel) {
	
    const string = variavel
    const texto = string.toUpperCase()
       
    console.log(variavel.length, texto )
    
}

minhaFuncao("Matheus")*/

/*
function somar(valor1,valor2) {
	
    const soma = valor1 + valor2
       
    console.log(soma)
    
}

function subtrair(valor1,valor2) {
	
    const sub = valor1 - valor2
       
    console.log(sub)
    
}

function multiplicar(valor1,valor2) {
	
    const multi = valor1 * valor2
       
    console.log(multi)
}    

function dividir(valor1,valor2) {
	
    const div = valor1 / valor2
       
    console.log(div)    
}


somar(30,3)
subtrair(30,3)
multiplicar(30,3)
dividir(30,3)

*/
//Desafios
//1).a
/*
const arrowFunction = (novaFunction) => {
    return novaFunction
    
}

console.log(arrowFunction)

//b.

const novaFunction = (2, 3) => {
    return 2 + 3
}
