function contar(){
    var ti = document.getElementById('txtinicio')
    var tf = document.getElementById('txtfim')
    var tp = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    var ni = Number(ti.value)
    var nf = Number(tf.value)
    var np = Number(tp.value)

    res.innerHTML = 'Contando:<br>'
    if(ti.value.length == 0 || tf.value.length == 0 || tp.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    }else{
        if(np == 0){
            window.alert('erro, o passo será considerado 1')
            np = 1
        }
        if(ni < nf){
            for(var c = ni; c <= nf; c += np){
                res.innerHTML += `\u{27A1} ${c} `
                }
        }else{
            for(var c = ni; c >= nf; c -= np){
                res.innerHTML += `\u{27A1} ${c} `
                }
            }res.innerHTML += `\u{1F3C1}`
        } 
    
    
}