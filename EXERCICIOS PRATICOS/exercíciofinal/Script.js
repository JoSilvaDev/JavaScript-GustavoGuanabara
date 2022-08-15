let num = document.getElementById('txtnum') // 1 - variaveis de ligação ao html
let tab = document.getElementById('tabela') // 1 - variaveis de ligação ao html
let res = document.getElementById('res') // 1 - variaveis de ligação ao html
let valores = [] // 2 - variavel composta (array, vetor) usada para armazenar e analisar os números

function adicionar(){ // 3 - função do botão adicionar
    if(isnum(num.value) && !intab(num.value, valores)){ // 4 - vai criar a função isnum para buscar a validação sobre o valor do número digitado. E intab para criar a validação sobre os numeros na tabela, para evitar repetição, negando a adição caso o numero existir
        valores.push(Number(num.value)) // 8 - a linha de comando que fará com que o vetor armazene os números digitados
        let option = document.createElement('option') // 9 - criação do elemento option pelo java script
        option.text = `valor ${num.value} adicionado.` // 9 - criação do conteúdo do elemento
        tab.appendChild(option) // 9 -localização do elemento, onde ele vai aparecer
        res.innerHTML = '' // 10 -  essa linha de comando vai servir para limpar os resultados da operação finalizar, quando algum número novo for adicionado
    }else{
        window.alert('Número inválido ou já encontrado na lista') // 5 - criação do alerta caso os parametros não sejam atendidos
    }
    num.value = '' // 11 - vai limpar a caixa de digitação quando algum número for adicionado
    num.focus() // 12 - vai deixar a caixa de digitação sempre selecionada, mesmo depois de um número ser adicionado
}

function isnum(n){ // 6 - verificação da variavel num dentro da funçao isnum recebendo o nome n
    if(Number(n) >= 1 && Number(n) <= 100){ // se o NUMERO n for maior igual a 1 e se o NUMERO n for menor igual a 100
        return true // vai ter um retorno verdadeiro para realizar a adição de num a tabela
    } else{
        return false // vai ter um retorno falso, vai realizar o alert do else
    }
}
function intab(n, val){ // 7 - verificação da variavel num recebendo nome n, e do vetor valores recebendo nome val
    if(val.indexOf(Number(n)) != -1){ // se a posição de n dentro de valores, for diferente de não existir
        return true // retornará verdadeiro caso os números já existam,  e vai realizar o alert do else
    }else{
        return false // retornará falso, caso o número não exista e vai realizar a adição de num na tabela, é preciso que o outro true também ocorra
    }
}

function finalizar(){ // 13 - função do botão finalizar
    if(valores.length == 0){ // caso não tenha nenhum número no vetor valores
        window.alert('Adicione valores antes de continuar!') //alerta de erro
    }else{
        let tot = valores.length // 14 - variavel que recebe a quantidade de números em valores
        let maior = valores[0] // 15 - o maior número será o primeiro
        let menor = valores[0] // 15 - o menor número será o primeiro
        let soma = 0 // 18 - a soma vale 0
        let media = 0 // 19 - a media vale 0
        for(let pos in valores){ // 16 - a posição em valores, que vai verificar valor por valor, fazendo um laço de percurso (específico para verificações em vetores)
            soma += valores[pos] // 18 - vai somar todos os valores de todas as posições
            if(valores[pos] > maior) // 17 - vai verificar o maior valor até sua posição
            maior = valores[pos] // 17 - maior vai receber o maior número
            if(valores[pos] < menor) // 17 - vai verificar o menor valor até a sua posição
            menor = valores[pos] // 17 - menor vai receber o menor número
        }
        media = soma / tot // 19 - a média será a soma dividido pelo total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}