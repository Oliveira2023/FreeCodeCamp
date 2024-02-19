function checkCashRegister(price, cash, cid) {
    let change = []
    let calcTroco = cash-price;
    let totalCid = 0
    let soma = 0
    let res = {}
    let show =''
    //console.log(cid)
    for (let i= 0; i<cid.length; i++){
      totalCid += cid[i][1]
    }
    totalCid = totalCid.toFixed(2)
    console.log(`o total no caixa é: ${totalCid}`)
    if (calcTroco == totalCid){
      res = {status: "CLOSED", change: cid}
      return res;
    }else if (totalCid < calcTroco){
      res = {status: "INSUFFICIENT_FUNDS", change: []}
      return res;
    }else if (calcTroco<totalCid){
      while (calcTroco>=100 && cid[8][1]>=100){
        show = 'yes'
        soma += 100
        calcTroco -= 100
        calcTroco = calcTroco.toFixed(2)
      }
      if (show){
        change.push(['ONE HANDRED', soma])
      }
      show = '' 
      cid[8][1] -= soma
      soma = 0
      while(calcTroco>=20 && cid[7][1]>=20){
        show = 'yes'
        soma += 20
        calcTroco -= 20
        cid[7][1] -= 20
        calcTroco = calcTroco.toFixed(2)
        }
      if (show){
        change.push(['TWENTY', soma])
      }
      show = ''
      soma = 0
      while(calcTroco>=10 && cid[6][1]>=10){
        show = 'yes'
        soma += 10
        calcTroco -= 10
        cid[6][1] -= 10
        calcTroco = calcTroco.toFixed(2)
        }
      if (show){
        change.push(['TEN', soma])
      }
      show =''
      soma = 0
      while(calcTroco>=5 && cid[5][1]>=5){
        show ='yes'
        soma += 5
        calcTroco -= 5
        cid[5][1] -= 5
        calcTroco = calcTroco.toFixed(2)
         }
      if (show){
        change.push(['FIVE', soma])
      }
      show = ''
      soma = 0
      while(calcTroco>=1 && cid[4][1]>=1){
        show ='yes'
        soma += 1
        calcTroco -= 1
        cid[4][1] -= 1
        calcTroco = calcTroco.toFixed(2)
        }
      if (show){
        change.push(['ONE', soma])
      }
      show = ''
      soma = 0
      while(calcTroco>=0.25 && cid[3][1]>=0.25){
        show = 'yes'
        soma += 0.25
        calcTroco -= 0.25
        calcTroco = calcTroco.toFixed(2)
        }
      if (show){
        change.push(['QUARTER', soma])
      }
      show = ''
      cid[3][1] -= soma
      soma = 0
      while(calcTroco>=0.1 && cid[2][1]>=0.1){
        show = 'yes'
        soma += 0.1
        calcTroco -= 0.1
        cid[2][1] -= 0.1
        calcTroco = calcTroco.toFixed(2)
        }
      if (show){
        change.push(['DIME', soma]);
      }
      show =''
      soma = 0
      while(calcTroco>=0.05 && cid[1][1]>=0.05){
        show = 'yes'
        soma += 0.05
        calcTroco -= 0.05
        cid[1][1] -= 0.05
        calcTroco = calcTroco.toFixed(2)
        }
      if (show){
        change.push(['NICKEL', soma])
      }
      show = ''
      soma = 0
      while(calcTroco>=0.01 && cid[0][1]>=0.01){
        show = 'yes'
        soma += 0.01
        calcTroco -= 0.01
        cid[0][1] -= 0.01
        calcTroco = calcTroco.toFixed(2)
        }
      if(show){
        change.push(['PENNY', soma])
      }
      show = ''
      soma = 0
      if (calcTroco==0){
        res = {status: "OPEN", change: change}
        return res;
      }else{
        res = {status: "INSUFFICIENT_FUNDS", change: []}
        return res
      }
    }
    console.log(calcTroco)
    console.log(res)
    //console.log((12).toFixed(2))
    
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])