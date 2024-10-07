let cervejas = ["Guiness", "Desperados", "Becks"]

function transforma(item){
    return `<div class="cerveja">${item}</div>`;
}

function carregarDiv(){
    let div = document.getElementById("meu amor")
    let cervejasHTML = cervejas.map(transforma)
    div.innerHTML = `${cervejasHTML.join('\n')}`
}

function embaralhar(){
    let div = document.getElementById("meu amor")
    for (let i = cervejas.length -1 ; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cervejas[i], cervejas[j]] = [cervejas[j], cervejas[i]];
        //console.log(j)
    }
    console.log(cervejas)
    // Retornando array com aleatoriedade
    let cervejasHTML = cervejas.map(transforma)
    div.innerHTML = `${cervejasHTML.join('\n')}`
}

function ordenar(){
    let div = document.getElementById("meu amor")
    cervejas.sort(function (a,b) {
        return a.localeCompare(b)
    })
    cervejas.sort(function(a,b){
        let x = a.toUpperCase()
        let y = b.toUpperCase()
        return x == y ? 0 : x > y ? 1 : -1
    })
    console.log(cervejas)
    let cervejasHTML = cervejas.map(transforma)
    div.innerHTML = `${cervejasHTML.join('\n')}`
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", carregarDiv)

document.getElementById("button_embaralhar").addEventListener("click", embaralhar)
document.getElementById("button_ordenar").addEventListener("click", ordenar)