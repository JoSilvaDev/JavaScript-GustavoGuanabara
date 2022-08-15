function contar(){
    var tni = document.getElementById('txtinicio')  //
    var tnf = document.getElementById('txtfim')     //  Primeira converção para linkar os arquivos do script e do html
    var tnp = document.getElementById('txtpasso')   //
    var res = document.getElementById('res')        //

    var ni = Number(tni.value)  //
    var nf = Number(tnf.value)  // Segunda converçao para os valores terem valor númerico
    var np = Number(tnp.value)  //
    
    if(tni.value.length == 0 || tnf.value.length == 0 || tnp.value.length == 0){  //validação de campo
            res.innerHTML = '[ERRO]Impossivel contar!'                            // mensagem de erro
    }else{
        res.innerHTML = 'Contando: <br>'  //mudança do texto do resultado
        
        if(np == 0){    //validação do campo passo
            window.alert('Passo Inválido! Considerando Passo 1')
            np = 1  //substituição de valor caso o passo seja 0
        }

        if(ni < nf){    // verificação para contagem crescente
        for(var c = ni; c <= nf; c += np){  // a variavel c é importante para a operação
            res.innerHTML += `${c} \u{27A1}` // o texto que vai ser somado ao texto do inicio para mostrar o resultado
        }  
        }else{          // verificação para contagem decrescente
        for(var c = ni; c >= nf; c -= np){  // a mudança de orientação e o uso de -= também é importante
            res.innerHTML += `${c} \u{27A1}`
        }
        }res.innerHTML += `\u{1F3C1}`   //o texto que ficará fora da contagem, apenas no final
    }
}