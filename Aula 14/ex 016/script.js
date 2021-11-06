function contar(){
let inc = document.getElementById('inc')
let fim = document.getElementById('fim')  
let pas = document.getElementById('pas')
let res = document.getElementById('res')
    if (inc.value.length == 0 | fim.value.length == 0 | pas.value.length == 0){
        window.alert('ERROR, voce nao digitou')
    }else{
        res.innerHTML = 'Contando... '
    let i = Number(inc.value)
    let f = Number(fim.value)
    let p = Number(pas.value)
        if (i < f){
            for(let c =i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F603},`
            }
        }else{
            for(let c =i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F603},`
            }

        }
        
   
        
    }

}
