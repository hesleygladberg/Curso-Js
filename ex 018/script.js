let num = document.querySelector('input#num')
let dados = document.querySelector('select#dados')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
       valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = (`Valor ${num.value} adicionado`)
        dados.appendChild(item)
        res.innerHTML = ''

    }else{
    window.alert ('Valor nao econtrado na lista!')
    }
    num.value = '' // apaga numero depois de ação
    num.focus() 
}


function finalizar(){
    let total = valores.length
    let c = valores.sort()
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    

    for(let pos in valores){
        soma += valores[pos]
        media = soma / total
        if(valores[pos] > maior)
        maior = valores[pos]
      if(valores[pos] < menor)
        menor = valores[pos]
    }
    
     res.innerHTML = (`Ao todo temos <strong>${total}</strong> numeros cadastrados<br>`) 
     res.innerHTML +=` Os valores em ordem crescente são<strong> ${ c}</strong><br>`
     res.innerHTML += `O maior valor encontrado é <strong>${maior}</strong>`
     res.innerHTML += `<br> O menor valor encontrado é <strong>${menor}</strong>`
     res.innerHTML += `<br> A soma dos valores é <strong>${soma}</strong>`
     res.innerHTML += `<br> A media dos valores é <strong>${media}</stroong>`
}
