const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

const valorDesconto = 20/100

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const dtMulta = frm.inInfra.value
    const valor = Number(frm.inValor.value)
    const hoje = new Date()
    const dataMulta = new Date()

    const parte = dtMulta.split("-")
    dataMulta.setDate(Number(parte[2]))
    dataMulta.setMonth(Number(parte[1])- 1)
    dataMulta.setFullYear(Number(parte[0]))

    const pagamentoEmDia = hoje - dataMulta

    let multa = 0
    let desc = 0

    if(pagamentoEmDia < 0){
        const dias = pagamentoEmDia / 7776000000
        multa = valor / valorDesconto
    }

    resp1.innerText = `Data limite para pagamento em dia ${dias}`
    resp2.innerText = `Valor com desconto R$: ${multa}`


    //7.776.000.000

    
})