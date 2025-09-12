const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let resposta = ""
    let chinchila = Number(frm.inChincilas.value)
    const ano = Number(frm.inAno.value)

    for (let i = 1; i <= ano; i++) {

        if (chinchila >= 2) {
            resposta += `${i}º ano:  ${chinchila} Chinchilas\n`
            chinchila = chinchila * 3
        } else {
            resposta = `Não tem Chinchilas suficientes para fazer uma estimativa`
        }
    }
    resp.innerText = resposta
})