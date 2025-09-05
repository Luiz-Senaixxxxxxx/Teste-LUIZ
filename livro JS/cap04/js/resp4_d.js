const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    if(ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB){
        resp1.innerText = `Não pode formar um triângulo`
        return
    }

    if (ladoA == ladoB && ladoB == ladoC) {
        resp1.innerText = `Lados Podem Formar um Triângulo`
        resp2.innerText = `Tipo: Equilátero`
    } else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
        resp1.innerText = `Lados Podem Formar um Triângulo`
        resp2.innerText = `Tipo: Escaleno`
    } else {
        resp1.innerText = `Lados Podem Formar um Triângulo`
        resp2.innerText = `Tipo: Isósceles`
    }
})