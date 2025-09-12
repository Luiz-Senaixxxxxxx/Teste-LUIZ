const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let chinchila = Number(frm.inChincilas.value)
    const ano = Number(frm.inAno.value)

    for (let i = 1; i <= ano; i++) {

            resp.innerText += `${i}º ano:  ${chinchila} Chinchilas\n`
            chinchila = chinchila * 3
        
    }
    
})