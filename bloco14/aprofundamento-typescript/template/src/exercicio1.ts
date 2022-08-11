// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.


// a)
const minhaString: string | number = 3

// b)
const meuNumero: number | string = 6

// c)
enum CoresDoArcoiris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    ANIL = "Anil",
    VIOLETA = "Violeta"

}

type pessoa = {nome: string, idade: number, corFavorita: string} 

let pessoa1: pessoa = {
    nome: "Luiz",
    idade: 22,
    corFavorita: CoresDoArcoiris.LARANJA
}

let pessoa2: pessoa = {
    nome: "Felipe",
    idade: 27,
    corFavorita: CoresDoArcoiris.AMARELO
}

let pessoa3: pessoa = {
    nome: "Paulo",
    idade: 32,
    corFavorita: CoresDoArcoiris.VERDE
}
console.log(pessoa1)