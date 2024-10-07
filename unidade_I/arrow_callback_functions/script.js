let marcas = ["Mercedes-Benz", "Fiat", "Toyota", "Chevrolet", "Ferrari", "Audi"]

//function transformar(item){
//const transformar = item => `<h1>${item}</h1>`

//function carregarDiv(){
const carregarDiv = (mcs) => {
    const div = document.getElementById("meu_amor")
    const marcasHtml = mcs.map(item => `<div class="marcas">${item}</div>`) 
    div.innerHTML = `${marcasHtml.join("\n")}`
}

const embaralhar = (mcs) => {
    let div = document.getElementById("meu_amor")
    for (let i = mcs.length -1 ; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mcs[i], mcs[j]] = [mcs[j], mcs[i]];
    }

    const marcasHTML = mcs.map(item => `<div class="marcas">${item}</div>`)
    div.innerHTML = `${marcasHTML.join('\n')}`
}

const ordenar = (mcs) => {
    let div = document.getElementById("meu_amor")
    mcs.sort(function (a,b) {
        return a.localeCompare(b)
    })
    mcs.sort(function(a,b){
        let x = a.toUpperCase()
        let y = b.toUpperCase()
        return x == y ? 0 : x > y ? 1 : -1
    })

    let marcasHTML = mcs.map(item => `<div class="marcas">${item}</div>`)
    div.innerHTML = `${marcasHTML.join('\n')}`
}

document.getElementById("button_embaralhar").addEventListener("click", () => embaralhar(marcas))
document.getElementById("button_ordenar").addEventListener("click", () => ordenar(marcas))
document.getElementById("botaoCarregar").addEventListener("click", () => carregarDiv(marcas))