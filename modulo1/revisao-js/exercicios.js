// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
 
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  // const reversed = array.reverse();
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  // return array.sort(function(a,b){ 
  //     return a -b 
  // });
  return array.sort((a,b) => a -b )
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

 let arrPar = []

 for(let i of array){
     if((i % 2) === 0){
         arrPar.push(i)
     }
 }
 return arrPar
}



// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let arrPar = []
  for (let i of array) {
     if ((i % 2) === 0) {
        arrPar.push(i ** 2)
     }
  }
  return arrPar
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

  let maiorNumero = array.reduce((a,b) => Math.max(a,b));
  return maiorNumero

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero = num1
 let menorNumero = num2

 if (num1 > num2) {
    maiorNumero = num1
    menorNumero = num2

 } else {
    maiorNumero = num2
    menorNumero = num1
 }

 const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
 const diferenca = maiorNumero - menorNumero

 return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
 }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let arrPar = []
  for (let i = 0; i <= ((n * 2) - 2); i++) {
     if ((i % 2) === 0) {
        arrPar.push(i)
     }
  }
  return arrPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

  if (ladoA === ladoB && ladoB === ladoC) {
      return "Equilátero"
   }
   else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      return "Isósceles"
   }
   else {
      return "Escaleno"
   }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array.sort((a, b) => b - a);
  array = [array[1], array[array.length-2]];
  return array
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
 
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
 const anonimo = {... pessoa}
 anonimo.nome = "ANÔNIMO"
 
 return anonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
 let arrAcesso= []

 for(i of pessoas ){
      if(i.altura > 1.5 && i.idade > 14 && i.idade < 60){
          arrAcesso.push(i)
      }
 }

 return arrAcesso
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let arrNotAcesso= []

 for(i of pessoas ){
      if(i.altura < 1.5 || i.idade <= 14 || i.idade >= 60){
          arrNotAcesso.push(i)
      }
 }

 return arrNotAcesso
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
 let soma = 0;
 let novoSaldo = 0;

 for (let i = 0; i < contas.length; i++){
    for(let somaCompras = 0; somaCompras < contas[i].compras.length; somaCompras++){
       soma += contas[i].compras[somaCompras];
       novoSaldo = contas[i].saldoTotal - soma;
       contas[i].saldoTotal = novoSaldo;
       soma = 0;
    }
    contas[i].compras = [];
 }
 return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
 
}