function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let ret = []
  console.log(arr[0].avgAlt)
  for (let elem in arr){
getElemOfArray(arr[elem])
function getElemOfArray (obj){
  console.log('dentro da função do calculo')
let T = Math.round((2*Math.PI)*Math.sqrt((earthRadius + obj.avgAlt)**3/GM)
)
  ret.push({name: obj.name, orbitalPeriod: T});
  

}

  }
  console.log(ret);
  return ret

}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);