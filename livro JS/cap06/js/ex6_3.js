const frm = document.querySelector("form") // obtém elementos da página

const resp = document.querySelector("pre")
const carros = [] // declara vetor global
carros.push({modelo: "Sandero 2014", preco: 32900 })
carros.push({modelo: "Celta 2011", preco: 19500 })
carros.push({modelo: "Palio 2013", preco: 26800 })
carros.push({modelo: "Fusca 1994", preco: 12500 })
carros.push({modelo: "Fiesta 2010", preco: 23000 })
carros.push({modelo: "Gol 2009", preco: 24300 })
carros.push({modelo: "Kwid 2018", preco: 35700 })
carros.push({modelo: "Astra 2011", preco: 31500 })

frm.btListar.addEventListener("click", () =>{
    if(carros.length == 0){
        alert("Não há carros na lista")
        return 
    }
    //método reduce() concatena uma string, obtendo modelo e preço de cada carro
    const lista = carros.reduce((acumulador, carro) =>
    acumulador + carro.modelo + ` - R$: ${carro.preco.toFixed(2)}\n`, "")
    resp.innerText = `Lista dos Carros Cadastrados\n ${"-".repeat(40)}\n${lista}`
})
//dispara o evento click em btListar (Equivale a um click no botaão)
// tem que ser colocado após a craição do evento de lista, a ordem afeta nesse caso
frm.btListar.dispatchEvent(new Event("click"))


frm.addEventListener("submit", (e) => { // "escuta" evento submit do form
    e.preventDefault() // evita envio do form
    // obtém dados do form
    const modelo = frm.inModelo.value 
    const preco = Number(frm.inPreco.value)
    carros.push({ modelo, preco }) // adiciona dados ao vetor de objetos
    // limpa campos do form
    frm.inModelo.value = "" 
    frm.inPreco.value = ""
    frm.inModelo.focus() // posiciona cursor em inModelo
    // atualiza a lsita ed carros na tela
    frm.btListar.dispatchEvent(new Event("click"))
})
frm.btFiltrar.addEventListener("click", () =>{
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))
    //se não informou o calor válido
    if(maximo == 0 || isNaN(maximo)){
        return
    }
    // .filter criar um novo vetor que atende a condição de filtros
    const carrosFiltro = carros.filter(carro => carro.preco <= maximo)
    if(carrosFiltro.length == 0){
        alert("Não há carros com preço inferior ou igual ao solicitado")
        return
    }
    let lista = ""
    for(const carro of carrosFiltro){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros de até R$: ${maximo.toFixed(2)}\n`
    resp.innerText += "-*-".repeat(40)+"\n"
    resp.innerText += lista
})
frm.btSimular.addEventListener("click", () =>{
    const desconto = Number(prompt("Qual o percentual de desconto: "))
    if(desconto == 0 || isNaN(desconto)){
        return
    }
    const carrosDesc = carros.map(aux => ({
        modelo:aux.modelo,
        preco: aux.preco - (aux.preco * desconto/100)
    }))

    let lista = ""
    for(const carro of carrosDesc){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros de desconto R$: ${desconto}%\n`
    resp.innerText += "$".repeat(40)+"\n"
    resp.innerText += lista

})