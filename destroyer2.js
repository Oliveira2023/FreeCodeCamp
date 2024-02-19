function destroyer(arr, ...valsToRemove){

    let filtro = arr.filter(elemt=> !valsToRemove.includes(elemt))
    console.log(filtro)
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);