let cervejas = [
    {
        name: "Guiness", 
        alcohol: "10%",
        style: "Sour Ale",
        ibu: "33 IBU"            
    }, 
    {
        name: "Desperados",
        alcohol: "6%",
        style: "Belgian Strong Ale",
        ibu: "19 IBU"             
    }, 
    {
        name: "Becks",
        alcohol: "5%",
        style: "European Amber Lager",
        ibu: "41 IBU"             
    },
    {
        name: "Weihenstephaner Hefeweissbier", 
        alcohol: "8.9%",
        style: "Sour Ale",
        ibu: "17 IBU"            
    }, 
    {
        name: "Storm King Stout",
        alcohol: "9.1%",
        style: "Belgian Strong Ale",
        ibu: "54 IBU"             
    }, 
    {
        name: "Stone IPA",
        alcohol: "9.0%",
        style: "European Amber Lager",
        ibu: "51 IBU"             
    },
    {
        name: "Bell’s Expedition", 
        alcohol: "5.1%",
        style: "Amber Hybrid Beer",
        ibu: "51 IBU"            
    }, 
    {
        name: "0 Minute IPA",
        alcohol: "2.9%",
        style: "Sour Ale",
        ibu: "51 IBU"             
    }, 
    {
        name: "Oak Aged Yeti Imperial Stout",
        alcohol: "5%",
        style: "Sour Ale",
        ibu: "50 IBU"             
    },
]

let cabecalioCervs = ["Nome", "Álcool", "Estilo", "Amargor"]
let colunas = ["name", "alcohol", "style", "ibu"]

const carregarDiv = (cervs, cabCervs) => {

    if(document.getElementById("trCervejas").childNodes.length == 1){

        const trCervejas = document.getElementById("trCervejas")
        const bodyCervejas = document.getElementById("bodyCervejas")

        cabCervs.forEach(element => {
            let th = document.createElement('th')
            th.setAttribute('scope', 'col')
            th.innerHTML = `${element}`
            console.log(th)
            trCervejas.appendChild(th)
        });

        cervs.forEach(element => {
            let tr = document.createElement('tr')
            colunas.forEach(dados => {
                if(element[dados] == undefined){
                    console.log(dados)
                    let td = document.createElement('td')
                    td.innerHTML = `undefined`
                    tr.appendChild(td)

                }
                else{
                    let td = document.createElement('td')
                    td.innerHTML = `${element[dados]}`
                    tr.appendChild(td)
                }
                
            });
            bodyCervejas.appendChild(tr)
        });
    }
}

//let botao = document.getElementById("botaoCarregar")
//botao.addEventListener("click", () => carregarDiv(cervejas))

document.getElementById("botaoCarregar").addEventListener("click", () => carregarDiv(cervejas, cabecalioCervs))