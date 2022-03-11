//Exercício de interpretação de código

//1. leia o código abaixo

//a) O que vai ser impresso no console?

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//2. Leia o código abaixo

//a) O que vai ser impresso no console?

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

//3. Leia o código abaixo

//a) O que vai ser impresso no console?

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

////////////////////////////////////////

//Exercício de escrita de código

//1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// // a) Crie um novo array que contenha apenas o nome dos doguinhos
// const nomeDoquinhos = pets.map((pet, indice, array) => {
//     return pet.nome
// })
// console.log(nomeDoquinhos)
// // b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)
// const racaSalsicha = pets.filter((nome, indice, array) => {
//     if (nome.raca === "Salsicha") {
//         return nome.raca
//     }
    
// })
// console.log(racaSalsicha)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

//2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//console.log(produtos)
// a) Crie um novo array que contenha apenas o nome de cada item
//?
//})
//console.log(apenasNomeDoItem)
// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
// let desconto = produtos.map((item, indice, array) =>{
//     const novoPreco = (item.preco * 0.95).toFixed(2)
//     return{nome: item.nome, preço: novoPreco}
// })
//console.log(desconto)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
// const bebidas = produtos.filter((nome, indice, array) => {
//     if (nome.categoria === "Bebidas") {
//         return nome.categoria
//     }
// })
//console.log(bebidas)
// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"


// const produtosYpe = produtos.filter((nome, indice, array) => {
//     let teste = nome.nome
    
//     if (teste.includes("Ypê")) {
//         return teste

//     }
// })
// console.log(produtosYpe)
//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const produtosYpe = produtos.filter((nome, indice, array) => {
    let teste = nome.nome
    
    if (teste.includes("Ypê")) {
        return teste

    }
})
console.log(produtosYpe)

     const separaNome = produtosYpe.map((nome, indice, array) => {
     return nome.nome
})
console.log(separaNome)

const separaPreco = produtosYpe.map((nome, indice, array) => {
    return nome.preco
})
console.log(separaPreco)



/////////////////////////////////////////////

//Desafios

//1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]

//a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

//b) Crie um novo array apenas com os tipos dos pokémons, sem repetição