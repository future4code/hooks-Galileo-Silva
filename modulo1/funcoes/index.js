// Exercício de interpretação de código

//1)

// function minhaFuncao(variavel) {
//     return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//a)resp 10 - 50
//b)nada é impresso



//2)

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
//     return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//a)Essa função tem a finalinelidade de verificar se na entrada contém a string "cenoura"

//b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//i. Eu gosto de cenoura.  true
//ii. CENOURA é bom pra vista. true
//iii. Cenouras crescem na terra. true

//Exercícios de escrita de código

//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

// function imprimirFrase() {
//     console.log("Eu sou Galileo, tenho 38 anos, moro em Recife e sou estudante")
// }
// imprimirFrase()

//b)

function informacoesPessoais(nome, idade, cidade, profissao) {
    console.log(`Eu sou ${ nome }, tenho ${ idade }, anos moro em ${cidade}, e sou ${profissao}`)
}

informacoesPessoais("galileo", 38, "Recife", "Estudante")







// function imprimirDadosPessoais(nome, idade, profissao) {
//     console.log(`
//Ola $ { nome }, sua idade $ { idade }, e sua profissao $ { profissao }
`)
// }
// imprimirDadosPessoais(28, "instrutora", "tayanne")


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
Desafios
1).a

// const arrowFunction = (novaFunction) => {
//     return novaFunction
    
// }

// console.log(arrowFunction)

// //b.

// const novaFunction = (2, 3) => {
//     return 2 + 3