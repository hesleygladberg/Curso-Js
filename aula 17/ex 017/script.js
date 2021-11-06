function gerar(){
    let num = document.getElementById('num')
    let seltab = document.getElementById('seltab')
    var n = Number(num.value)
    if (num.value.length == 0 ){
        window.alert('Error, digite um numero')
    }else if (n > 10){
        window.alert('Não é um numero valido!')
    }
    else{
        seltab.innerText = ''
        for(let c = 1; c <=10; c++){
            let item = document.createElement('option')
            item.innerText = `${n} x ${c} = ${n*c}`
            seltab.appendChild(item)
        }
    }
    

}
