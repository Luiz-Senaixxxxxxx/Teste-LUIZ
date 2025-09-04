const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const permitida = Number(frm.inPermitida.value)
    const condutor = Number(frm.inCondutor.value)

    const multa = permitida * 1.20;

    if(condutor <= permitida){
        resp.innerText = "Situação: Sem multa"
    }else if(condutor > permitida && condutor <= multa){
        resp.innerText = "Situação: Multa Leve"
    }else if(condutor > multa ){
        resp.innerText = "Situação: Multa Grave"
    }
})