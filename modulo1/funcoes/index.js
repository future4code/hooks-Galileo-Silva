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
//     const nome = "Galileo"
//     const idade = 38
//     const cidade = "Recife"
//     const profissao = "estudante"

      
    
//     console.log(`Eu sou o ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
// }
// imprimirFrase()

//b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

// function imprimirFrase(nome, idade, cidade, profissao) {
      
//         console.log(`Eu sou o ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
// }
// imprimirFrase("Galileo", 38, "Recife", "estudante")

//2).
//a).  Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// function somaDeNumeros(num1 = 2, num2 = 3) {
   
//     const soma = num1 + num2

//     return soma
    
// }

// console.log(somaDeNumeros())

//b). Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

// function somaDeNumeros(num1, num2) {
   
//     const camparacao = num1 >= num2

//     return camparacao
    
// }

// console.log(somaDeNumeros(2, 3))

//c). Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// function somaDeNumeros(num1) {
   
//     const soma = num1 %2 === 0
    

//     return soma
    
// }

// console.log(somaDeNumeros(2))

//d). Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// function minhaFuncao(variavel) {

//     const string = variavel
//     const texto = string.toUpperCase()

//     console.log(variavel.length, texto)
// }

// minhaFuncao("Matheus")

//3). Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

// function somar(valor1, valor2) {

//     const soma = valor1 + valor2

//     console.log(soma)

// }

// function subtrair(valor1, valor2) {

//     const sub = valor1 - valor2

//     console.log(sub)

// }

// function multiplicar(valor1, valor2) {

//     const multi = valor1 * valor2

//     console.log(multi)
// }

// function dividir(valor1, valor2) {

//     const div = valor1 / valor2

//     console.log(div)
// }


// somar(30, 3)
// subtrair(30, 3)
// multiplicar(30, 3)
// dividir(30, 3)


// Desafios
// 1).a

const arrowFunction = (arrowFunction2) => {
  
  return arrowFunction2
}
console.log(arrowFunction())

// b).

const arrowFunction2 = (num2, num3) => {
        
    const soma = num2 + num3
    return soma

}
console.log(arrowFunction2(2, 3))
