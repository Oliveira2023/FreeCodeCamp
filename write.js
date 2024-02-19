let primosList = document.getElementById('primos')
let somaEl = document.getElementById('soma')
let primos = []
function writePrimos(number) {
    for (let i = 2; i <= number; i++) {
        if (isPrime(i)) {
            primos.push(i)
        }
    }
    soma = primos.reduce((a, b) => a + b,0)
    return soma
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}
somaEl.innerHTML = writePrimos(1000)




// primosList.innerHTML = 'Primos: ' + primos
somaEl.innerHTML = 'Soma: ' + soma

function isThere(text){
    let texto = ("olá joão").split(" ");
    console.log("texto:",texto)
    console.log("text:",text)
    if (texto.indexOf(text)>=0){
        return true
    }else{
        return false
    }
}
let texto = ("olá joão").split(" ");
console.log(texto.indexOf('olá'))
console.log(isThere('olá'))
// console.log (texto.indexOf('oláb')<0)


