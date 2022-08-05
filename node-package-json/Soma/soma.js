let num1 = Number(process.argv[2])
let num2 = Number(process.argv[3])

const soma = num1 + num2
blue = '\u001b[34m'

if (!process.argv[2] || !process.argv[3]) {
    console.log("Esperava dois parâmetros e só recebi 1")
} else{

console.log(`${blue}Resposta: ${soma}`)

}