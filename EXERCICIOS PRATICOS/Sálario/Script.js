function calcular(){
    let sali = document.getElementById('txtsali')
    let anoi = document.getElementById('txtanoi')
    let res = document.getElementById('res')
    let anoa = new Date()
    let ano = anoa.getFullYear()

    if(sali.value.length == 0 || anoi.value.length != 4){
        alert('erro')
    } else{
        let si = Number(sali.value)
        let ai = Number(anoi.value)
        let s = ano - ai

        if(s < 1){
            porc = 0
            res.innerHTML = `${si + si * porc}`
        }else if(s < 2){
            porc = 0.015
            res.innerHTML = `${si + si * porc}`
        }else{
            for(c = 0; c < s; c++){
                res.innerHTML = `${}`
            }
        }
        
        }
    
    
}