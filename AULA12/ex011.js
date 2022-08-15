var idade = 101
console.log(`você tem ${idade} anos`)
if(idade > 100){
    console.log('Ah para né, tu ta morto porra')
}else{
if(idade < 16){
    console.log('Não vota')
}else{
    if(idade <18 || idade > 65){
        console.log('Voto Opcional')
    }else{
        console.log('Voto Obrigatorio')
    }
    }}