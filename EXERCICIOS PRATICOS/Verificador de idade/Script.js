function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //formataçao normal para ano do sistema
    var nasc = document.getElementById('txtnasc') // variavel do input
    var res = document.getElementById('res') // variavel do resultado
    var img = document.getElementById('imagem') // variavel da div com imagem
    if(nasc.value.length != 4 || nasc.value > ano || nasc.value < 1900){ // para negar q o imput não tem caractere / maior q o ano atual
        window.alert('[ERRO]Verifique os dados novamente.') //alerta simples de erro
    }else{//caso o alerta de erro não ocorra
        var sex = document.getElementsByName('radsex')//variavel das opçoes de marcaçao
        var idade = ano - Number(nasc.value)//variavel do resultado do ano inserido menos o ano do sistema, que vai ser ultilizado para dar a idade
        var genero =''// variavel que vai definir o genero
        if(sex[0].checked){//caso  a primeira opção seja marcada
            genero = 'Homem'//definiçao do genero na primeira opçao
            if(idade >=0 && idade < 10){//vai definir a imagem a ser usada
                img.src= "criancam.png"
                document.body.style.background = 'rgba(230, 66, 37, 0.897)'
                //criança
            }else if(idade < 22){
                img.src = 'jovemm.png'
                document.body.style.background = 'rgba(223, 131, 45, 0.897)'
                //adolescente
            }else if(idade < 51){
                img.src = 'adultom.png'
                document.body.style.background = 'rgba(17, 126, 44, 0.904)'
                //adulto
            }else{
                img.src = 'idosom.png'
                document.body.style.background = 'rgba(104, 17, 126, 0.904)'
                //idoso
            }
        }else if(sex[1].checked){//definicao do genero caso seja escolhido a segunda opçao
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                img.src = 'criancaf.png'
                document.body.style.background = 'rgba(230, 66, 37, 0.897)'
                //criança
            }else if(idade < 21){
                img.src = 'jovemf.png'
                document.body.style.background = 'rgba(223, 131, 45, 0.897)'
                //adolescente
            }else if(idade < 50){
                img.src = 'adultof.png'
                document.body.style.background = 'rgba(17, 126, 44, 0.904)'
                //adulto
            }else{
                img.src = 'idosof.png'
                document.body.style.background = 'rgba(104, 17, 126, 0.904)'
                //idoso
            }
        }
    }
    res.innerHTML = `Identificamos ${genero} com ${idade} anos.`//vai transcrever o texto com a idade e o sexo


}