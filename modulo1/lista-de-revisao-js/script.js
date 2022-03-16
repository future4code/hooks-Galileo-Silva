let pessoas = 
[
    {
        "nome": "Benevides Castro",
        "anoDeNascimento": 1950,
        "nacionalidade": "brasileira",
        "tomouVacina": false
    },
    {
        "nome": "Clara Ruiz",
        "anoNascimento": 1993,
        "nacionalidade": "colombiana",
        "tomouVacina": true
    },
    {
        "nome": "Maria Aparecida Luz",
        "anoNascimento": 1961,
        "nacionalidade": "brasileira",
        "tomouVacina": false
    }
]

//pessoas.nacionalidade === "brasileira" && !pessoas.tomouVacina && 2021 - pessoas.anoDeNascimento >= 60)

function selecionarPessoas(pessoa){
    const pessoasParaVacinar = []

    for(let pessoa of pessoas ){
        if(
            pessoa.nacionalidade === "brasileira" && !pessoa.tomouVacina && 2021 - pessoa.anoDeNascimento >= 60
        ){
            pessoasParaVacinar.push(pessoa)
        }
    }
    return pessoasParaVacinar
}

console.log(selecionarPessoas())

