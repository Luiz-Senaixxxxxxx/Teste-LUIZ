const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    
    let resposta = " "
    const numero = Number(frm.inNumero.value)
    for(let i = numero; i > 1; i--){
        resposta += i + ","
    }

    resp.innerText = `Entre ${numero} e 1:` + resposta + 1
})