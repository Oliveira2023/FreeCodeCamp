
let fibocinaci = [0,1]// crio uma lista com todos os numeros fibocinaci
let res = 0 // crio uma variável para a resposta, o resultado da soma
let toSoma = [] // lista dos numeros para soma, todos os impares
function sumFibs(num) {
  
    let seqFibonaci = fibocinaci[fibocinaci.length-1] + fibocinaci[fibocinaci.length -2]// realizo a soma do ultimo com o penultimo e 
    //coloco na variável para posterior push na lista fibocinaci e talvez na lista para toSoma - para somar

      if (seqFibonaci<= num){// se esse numero resultado da soma dos ultimos numeros da lista for menor que o numero dado como argumento
        fibocinaci.push(seqFibonaci)// faz um push, insere ele na lista fibocinaci
        //console.log('dentro do if')
        //return 0
       return sumFibs(num)//rechamo a função com mesmo numero para ir acrescentando numeros na lista fibocinaci até ser maior que o numero
        
      }else{// cai no else quando o numero fibocinaci for maior que o numero dado como argumento para a função, a lista está completa
        
        for (let i=0; i<fibocinaci.length; i++){//faz um for nesta lista fibocinaci - para percorrer todos os valores da lista
          //console.log('dentro do for')
          if (fibocinaci[i] % 2 !== 0){// os valores da lista que são impares (%2!==0)(dividido por 2 não sobra 0)
          toSoma.push(fibocinaci[i])// nesse caso inserimos o numero na lista dos numeros pra somar
          }
        }
        //console.log(fibocinaci)
        //console.log(toSoma)
        
      }
      console.log(fibocinaci)
      console.log(toSoma)
      res = toSoma.reduce((sum, atual) => sum + atual)// executo a soma dos valores impares inseridos na lista para somar
      console.log(res)
      return res// retorno o valor encontrado
  
}

sumFibs(10);