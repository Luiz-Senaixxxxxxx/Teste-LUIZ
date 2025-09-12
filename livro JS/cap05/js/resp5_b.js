const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let resposta = ""
    const chinchila = Number(frm.inChincilas.value)
    const ano = Number(frm.inAno.value)

    for (let i = 1; i <= ano; i++) {
        if (i < 2) {
            resposta += `${i}º ano:  ${chinchila} Chinchilas\n`
        } else {
            if (chinchila >= 2) {
                resposta += `${i}º ano:  ${(chinchila * 3) * i} Chinchilas\n`
            } else {
                resposta = `Não tem Chinchilas suficientes para fazer uma estimativa`
            }
        }

    }
    resp.innerText = resposta
})