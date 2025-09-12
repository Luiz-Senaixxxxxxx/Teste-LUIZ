const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    let resposta = ""
    const fruta = frm.inFruta.value
    const num = Number(frm.inNumero.value)

    for(let i = 0; i <= num; i++){
    resposta += ` ${fruta} `; 
    if(i < num ){
        resposta += " * "
    }
    } 
    resp.innerText = resposta
})