const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const dtMulta = frm.inInfra.value
    const valor = Number(frm.inValor.value)
    const hoje = new Date()
    const desconto = new Date()

    const parte = dtMulta.split("-")
    multa.setDate(Number(parte[2]))
    multa.setMonth(Number(parte[1])- 1)
    multa.setFullYear(Number(parte[0]))

    
})
