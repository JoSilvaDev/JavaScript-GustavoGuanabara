function calcular(){
    var tn = document.getElementById('txtn')
    var tab = document.getElementById('tab')
    var res = document.getElementById('res')

    var nn = Number(tn.value)
    tab.innerHTML = ''
    if(tn.value.length == 0){
        window.alert('[ERRO] Digite algum número!')
    }else{
        for(var m = 0; m <= 10; m++){
            r = m * nn
            var item = document.createElement('option')
            item.text = `${nn} x ${m} = ${r}`
            tab.appendChild(item)
        }
    }
}