/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
*/

/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
*/

/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false

}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
*/
/*
const pessoa = {
    nome: "Luiz",
    apelido: ["Lula", "Lulinha", "Lulala"]
}

const pessoa2 = {
    ...pessoa,
        apelido: ["Luletch", "Lulão", "Luli"]
}

function imprimirObejeto(objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido[0]}, ${objeto.apelido[1]} ou ${objeto.apelido[2]}`)
}

imprimirObejeto(pessoa)

imprimirObejeto(pessoa2)
*/
/*
const pessoa = {
    nome: "Luiz",
    idade: 18,
    profissao: "Suporte TI"
}

const pessoa1 = {
    nome: "Galileo",
    idade: 20,
    profissao: "Engenheiro de Software"
}

function retornaArray(objeto){

    arraySaida = [objeto.nome , objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]  

    return arraySaida
}

console.log(retornaArray(pessoa))

*/

const carrinho = []

const fruta = {
    nome: "Abacaxi",
    disponibilidade: true
}

const fruta1 = {
    nome: "Morango",
    disponibilidade: true
}

const fruta2 = {
    nome: "Banana",
    disponibilidade: true
}

function adicionarCarrinho(objeto, objeto1, objeto2){
    carrinho.push(objeto, objeto1, objeto2)
    return carrinho 
}
console.log(adicionarCarrinho(fruta, fruta1, fruta2))

//Desafio 3).
function controleDeEstoque(disponivel){
    saida = disponivel.fruta1
    
    return saida
}
console.log(controleDeEstoque(fruta1))





/*
function cadastroUsuario(){

       // nome = prompt("Digite um nome")
       // idade = prompt("Digite dua idade")
       // profissao = prompt("Profissão: ")

        const novoUsuario = {
            nomeUsuario: prompt("Digite um nome: "),
            idadeUsuario: prompt("Digite dua idade: "),
            profissao: prompt("Profissão: ") 
        }

        console.log(novoUsuario)
}

cadastroUsuario()
*/

/*
const filme = {
    anoLancamento: 2020,
    nome: "Homem-aranha"
}

const filme1 = {
    anoLancamento: 2021,
    nome: "Homem-aranha 2"
}

function detalhesFilmes(objeto, objeto1){

    const comparacao = filme.anoLancamento < filme1.anoLancamento
    console.log(`O primeiro filme foi lançado antes do segundo? ${comparacao}`)
    
    const comparacao1 = filme.anoLancamento === filme1.anoLancamento 
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${comparacao1}`)
    
    return detalhesFilmes
}

detalhesFilmes(filme, filme1)
*/