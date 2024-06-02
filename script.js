var resultado = document.getElementById('resultado')

function adicionar(num){
    resultado.innerHTML = resultado.innerHTML + num
}

function calcular(){
    resultado.innerHTML = eval(resultado.innerHTML)
}

function limpar(){
    resultado.innerHTML = ''
}


