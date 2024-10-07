function carregarDiv(){
    let divH1 = document.getElementById("nome_cerveja")
    divH1.classList.toggle('hide')
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", carregarDiv)