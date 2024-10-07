let tableEl = document.getElementById("tableDiv")
tableEl.style.display = 'none'

let cervejas = []
let users = []
let addresses = []

var apiCerveja = "https://random-data-api.com/api/v2/beers?size=3"
var apiUsers = "https://random-data-api.com/api/v2/users?size=3"
var apiAddresses = "https://random-data-api.com/api/v2/addresses?size=3"

let cabecalioCervs = ["Nome", "Álcool", "Estilo", "Amargor"]
let colunasCervs = ["name", "alcohol", "style", "ibu"]

let cabecalioUsers = ["Nome", "E-mail", "Data de Nascimento", "Telefone"]
let colunasUsers = ["first_name", "email", "date_of_birth", "phone_number"]

let cabecalioAdd = ["Cidade", "Nome da Rua", "Número", "Estado"]
let colunasAdd = ["city", "street_name", "building_number", "state"]

//cs é um array de cervejas
const carregarDiv = (vetor, cabecalho, colunas) => {
    
    const tabela = document.getElementById("tableDiv")
    console.log(tabela.style)

    const trTable = document.getElementById("trTable")
    const bodyTable = document.getElementById("bodyTable")

    cabecalho.forEach(element => {
        let th = document.createElement('th')
        th.setAttribute('scope', 'col')
        th.innerHTML = `${element}`
        console.log(th)
        trTable.appendChild(th)
    });

    vetor.forEach(element => {
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
        bodyTable.appendChild(tr)
    });

    document.getElementById("elementosDiv").style.display = 'none'
    tabela.style.display = 'block'
}

async function carregarApi(vetor, linkUrl, cabecalho, colunas){

    try{
        let res = await fetch(linkUrl)
        vetor = await res.json()
        console.log(vetor)

        if(tableEl.style.display == 'block'){
            console.log('entrou no try')
            var lista01 = document.getElementById("trTable").children
            var lista02 = document.getElementById("bodyTable").children

            for(var i = (lista01.length - 1); i >= 0; i--){
                lista01[i].remove(true)
            }
            for(var i = (lista02.length - 1); i >= 0; i--){
                lista02[i].remove(true)
            }

            carregarDiv(vetor, cabecalho, colunas)
        }
        else{
            carregarDiv(vetor, cabecalho, colunas)
        }

    }catch(err){
        document.getElementById("elementosDiv").innerHTML = "Fudeu..."
    }

}

document.getElementById("botaoCerveja").addEventListener("click", () => carregarApi(cervejas, apiCerveja, cabecalioCervs, colunasCervs))
document.getElementById("botaoUsers").addEventListener("click", () => carregarApi(users, apiUsers, cabecalioUsers, colunasUsers))
document.getElementById("botaoAdd").addEventListener("click", () => carregarApi(addresses, apiAddresses, cabecalioAdd, colunasAdd))