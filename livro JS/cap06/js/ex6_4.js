const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const criancas = [] //declara vetor global
//incluir crainças fixas
criancas.push({nome:"Lucas",idade:4})
criancas.push({nome:"Ana",idade:3})
criancas.push({nome:"Bianca",idade:6})
criancas.push({nome:"Pedro",idade:6})
criancas.push({nome:"João",idade:4})
criancas.push({nome:"Maria",idade:4})
criancas.push({nome:"Juliana",idade:3})
criancas.push({nome:"Cátia",idade:6})

frm.btListar.addEventListener("click", () =>{
    if(criancas.length == 0){
        alert("Não há crianças na lista")
        return 
    }
    //método reduce() concatena uma string, obtendo modelo e preço de cada carro
    const lista = criancas.reduce((acumulador, crianca) =>
    acumulador + crianca.modelo + ` - R$: ${crianca.idade.toFixed(2)}\n`, "")
    resp.innerText = `Lista das Crianças  Cadastradas:\n ${"-".repeat(40)}\n${lista}`
})
// Usar o ctrl + D e continuar clicando D para selecionar a quantidade das palvras iguais desejadas no código

frm.addEventListener("submit", (e) =>{
    e.preventDefault()


})