let num = document.getElementById('txtnum')
let tab = document.getElementById('txttabela')
let res = document.getElementById('res')
let valores = []

function adicionar(){
    if(isnum(num.value) && !intab(num.value , valores)){
        valores.push(Number(num.value))
        let option = document.createElement('option')
        option.text = `${num.value} adicionado`
        tab.appendChild(option)
    }
}

function isnum(num){
    if(Number(num) >= 0 && Number(num) < 100){
        return true
    }else{
        return false
    }
}
function intab(num, valores){
    if(valores.indexOf(Number(num)) != -1){
        return true
    }else{
        return false
    }
}