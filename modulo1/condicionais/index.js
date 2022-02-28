//1.)Interpretação de código

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//a) Explique o que o código faz. Qual o teste que ele realiza?

//Ele solicita a inserção de um número e informa se ele é par 

//b) Para que tipos de números ele imprime no console "Passou no teste"? 

//Os números onde o resto da divisão por 2 é igual a 0

//c) Para que tipos de números a mensagem é "Não passou no teste"?

//Para os números que não são divisiveis por 2

//2.)O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     //break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima?

//Serve para informar o valor da fruta inserida

//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?

//O preço da fruta maçã é R$2.25

//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?

//O preço da fruta Pêra é R$5

//3.)

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a) O que a primeira linha está fazendo?

//Pergntando se o número inserido é maior que 10

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

//Ao digitar 10 retornará a mensagem "Esse número passou no teste".
//Ao digitar -10 será reportado erro, pois não existe condição para números menores que 0

//Exercícios de escrita de código

// 1). Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// const idade = Number(prompt("Informe sua idade"))

// if(idade >= 18) {
//   console.log("Você pode dirigir")

// } else{
//     console.log("Você não pode dirigir")
// }

//2). Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// const turno = prompt("Em que turno você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno)")
// const turnoM = turno.toUpperCase()

// if(turnoM === "M") {
//   console.log("Bom dia!")
// } else if(turnoM === "V") {
//   console.log("Boa tarde!")
// } else if(turnoM === "N") {
//   console.log("Boa noite!")
// }

//3). Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// function turnoDaAula(periodo) {
//     switch (periodo) {
//         case "M":
//           console.log("Bom dia!");
//           break;
//         case "V":
//           console.log("Boa Tarde!");
//           break;
//         case "N":
//           console.log("Boa Noite!");
//           break;
//         default:
//           console.log("Não existe esse turno!");
//           break;
//     }
// }
//     const turno = prompt("Em que turno você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno)")
//     const turnoM = turno.toUpperCase()
//     turnoDaAula(turnoM);

//4). Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("


// const genero = prompt("Qual o genero do filme?")
// const valor = prompt("Qual o valor do ingresso?")
// const generoM = genero.toUpperCase()

// if(generoM === "FANTASIA" && valor <= 15) {
//   console.log("Bom filme!")
// } else {
//     console.log("Escolha outro Filme!")
// }

//Desafios

//1). Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

// const genero = prompt("Qual o genero do filme?")
// const valor = prompt("Qual o valor do ingresso?")

// if(genero.toLocaleUpperCase() === "FANTASIA" && valor <= 15) {
//     const snack = prompt("Qual Lanchinho você quer comprar?")
//     console.log(`Aproveite o seu(a) ${snack}`)
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro Filme!")
// }

//2). 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
    // - Nome completo;
    // - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    // - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    // - Categoria: pode ser as opções 1, 2, 3 ou 4;
    // - Quantidade de ingressos
    
    // O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

    // const nome = prompt("Informe seu nome")
    // const tipoDeJogo = prompt("Informe o tipo de jogo(IN - internacional ou DO - doméstico)")
    // const tipoDeJogoM = tipoDeJogo.toUpperCase()
    // const etapaDoJogo = prompt("Informe a etapa do jogo(SF, DT, ou FI")
    // const etapaDoJogoM = etapaDoJogo.toUpperCase()
    // const categoria = prompt("Informe a categoria(1, 2, 3, ou 4)")
    // const quantidadeDeIngressos = prompt("Informe a quantidade de ingressos")
    // const valorIngressoDo = 



    // let precoUnitario;

    // switch (etapa) {
    //     case "SF":
    //         switch (categoria){
    //             case1:
    //             precoUnitario = 1320
    //         }
            
    //         break;
    //     case  
    
    //     default:
    //         break;
    // }

    const compra = {
        nome: prompt("Informe seu nome"),
        tipoDeJogo: prompt("Informe o tipo de jogo(IN - internacional ou DO - doméstico)"),
        etapaDoJogo: prompt("Informe a etapa do jogo(SF, DT, ou FI"),
        categoria: prompt("Informe a categoria(1, 2, 3, ou 4)"),
        quantidadeDeIngressos: prompt("Informe a quantidade de ingressos")
        
    }

    console.log(compra)

    // function processarCompra(objeto){
        



    // }

    // processoCompra();

    

