const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const clubes = []

clubes[0] = "Flamengo"
clubes[1] = "Fluminense"
clubes[2] = "Botafogo"
clubes[3] = "Vasco"
clubes[4] = "Santos"
clubes[5] = "São Paulo"
clubes[6] = "Grêmio"
clubes[7] = "Internacional"

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const clube = frm.inClube.value
    clubes.push(clube)
    let lista = ""

    for(let i = 0; i < clubes.length; i++){
        lista += `${clubes[i]}  `
    }
    resp.innerText = lista // exibe a lista de pacients na página
    frm.inClube.value = "" // lima conteúdo do campo form
    frm.inClube.focus() // posiciona o cursor no campo

})

frm.btListar.addEventListener("click", () => {
    //se o tamanho do vetro = 0
    if (clubes.length == 0 || clubes.length % 2 == 1) {
        alert("Não há clubes suficientes para o campeonato")
        frm.inClube.focus()
        return
    }


    const time = clubes //remover do inicio da fila (e obtem o nome)
    resp.innerText = time // exibe o nome do paciente em atendimento
    let lista = ""
    clubes.forEach((clube, i) => (lista += `${clube} x ${clube}\n`))
    resp.innerText = lista
})

frm.btTabela.addEventListener("click", () =>{
    if(clubes.length % 2 == 1){
        alert("Não há clubes suficientes para o campeonato")
        frm.inClube.focus()
        return
    }
})
