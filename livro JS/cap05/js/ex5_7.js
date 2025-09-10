const frm = document.querySelector("form")
const resp = document.querySelector("#outEspacos")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let estrelas = "" //variável que irá concatenar as estrrelas/traços

    for(let i = 1; i <= numero; i++){
        if(i % 2 == 1){
            estrelas += "*"
        }else{
            estrelas += "-"
        }
    }
    resp.innerText = estrelas
})

frm.addEventListener("reset", (e) =>{
    e.preventDefault()
    frm.inNumero.focus()

    estrelas = ""
    resp.innerText = ""
    numero = 0
})