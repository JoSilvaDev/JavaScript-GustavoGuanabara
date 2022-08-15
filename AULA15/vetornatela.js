/*let valores = [8, 1, 7, 4, 2, 9]
for(posicao = 0; posicao < valores.length; posicao++){
    console.log(`O valor ${valores[posicao]}, está na posição ${posicao}`)
}
for(let indice in valores){
    console.log(`O valor ${valores[indice]}, está na posição ${indice}`)
}*/

let num = [5,8,4]
num[3] = 6
num.push(7)
num.sort()
console.log(`${num}`)
let indice = num.indexOf(5)
if(indice == -1){
    console.log(`Posição não encontrada`)
}else{
    console.log(`O valor está na posição ${indice}`)
}