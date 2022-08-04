let receberNome = String(process.argv[2])
let receberIdade = Number(process.argv[3])
const novaIdade = receberIdade + 7



const frase = `Olá, ${receberNome}! Você tem ${receberIdade} anos.`
const frase2 = `Olá, ${receberNome}! Você tem ${receberIdade} anos. Em sete anos você terá ${novaIdade}`
red = '\u001b[31m'

if (!process.argv[2] || !process.argv[3]) {
    console.log("Esperava dois parâmetros e só recebi 1")
} else{

    console.log(red,frase)
    console.log(frase2)
}

