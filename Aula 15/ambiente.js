/*
let num = [3, 6, 9] // [] elemenos de uma array, cada elemento tem um valor
num[3] = 1  // adiciona um elemento '3' 
num.push(5) //adiciona um elemento ao final
num.length // comprimento de uma array (quantos elementos tem)
num.sort() // coloca os elementos em ordem crescente
console.log(num);
*/
let valores = [2, 3, 4, 6, 8]
 /*for (let pos=0 ; pos <valores.length; pos++ ){
     console.log(` O valor do elemento ${pos} é ${valores[pos]}`)
 }
 */
for (let pos in valores){ // 'Para cada posição dentro de 'valores'. for = para, in = dentro
    console.log(`O valor do elemento ${pos}, é ${valores[pos]}`)
}

let ind =valores.indexOf(2)
if (ind == -1){
    console.log('O valor nao existe')
}else{ 
console.log(`O valor 8 esta na posição ${ind} `)
}