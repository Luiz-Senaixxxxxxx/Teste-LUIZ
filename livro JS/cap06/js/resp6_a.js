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
  
    frm.btListar.dispatchEvent(new Event("click"))
    frm.inClube.value = "" // lima conteúdo do campo form

})

frm.btListar.addEventListener("click", () => {
    //se o tamanho do vetro = 0
    if (clubes.length == 0) {
        alert("Lista em branco")
    }
    for (const clube of clubes) {
        resp.innerText += `${clube}\n`
    }
})

frm.btListar.dispatchEvent(new Event("click"))

frm.btTabela.addEventListener("click", () => {
    if (clubes.length % 2 == 1) {
        alert("Deve ser um número PAR de clubes")
        return
    }
    resp.innerText = ""
    for (let i = 0; i < clubes.length / 2; i++) {
        const element = clubes[i];
        resp.innerText += `${clubes[i]} x ${clubes[clubes.length - i - 1]}\n `
    }
})
