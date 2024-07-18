function verificar(){
    let palavra = document.getElementById('palavra').value;
    palavra = palavra.replaceAll(/\s/g, '');
    let quantidadeLetras = palavra.length;
    x = quantidadeLetras 
    for(i = 0; i < quantidadeLetras; i++) {
        x--;
        console.log(palavra.substr(i,1))
        console.log(palavra.substr(x,1))
        if(palavra.substr(i,1) == palavra.substr(x,1)){
            
        } else {    
            resultado = document.getElementById('resultado');
            resultado.innerHTML = `<label class="texto__paragrafo">A palavra/frase não é um palíndromo.</label>`
            return alterarStatusBotao();
        }
    }
    resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">A palavra/frase é um palíndromo.</label>`
    alterarStatusBotao()
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('palavra').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo"></label>';
    alterarStatusBotao();
}