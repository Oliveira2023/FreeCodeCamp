//criando a função
function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source)

    let filtro = collection.filter(obj => sourceKeys
        .map(key => obj.hasOwnProperty(key) && obj[key] === source[key]))//mapeia as chaves, para cada chave verifica se o objeto(collection) tem esta chave e se o valor da chave é igual ao valor da chave do argumento source.
        .reduce((a,b) => a && b)//no caso de ter 2 argumentos verifica que o retorno contenha os 2?
}


// chamando a função
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" },{ first: "Tybalt", last: "Oliveira" }], { last: "Capulet" ,first: "Tybalt"});