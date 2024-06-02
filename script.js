
function adicionar(num){
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = resultado.innerHTML + num
}

function calcular(){
    document.getElementById('resultado').innerHTML = eval(document.getElementById('resultado').innerHTML)
}

function limpar(){
    resultado.innerHTML = ''
}


