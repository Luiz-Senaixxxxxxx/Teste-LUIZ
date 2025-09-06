const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const secreto = Math.round(Math.random()*100)
let tentativa = 0

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    const num = Number(frm.inNum.value)
    tentativa++
    if(num == secreto){
        resp.innerText = `Parabéns! Você acertou com ${tentativa} tentativas`
    }else if(num > secreto){
        resp.innerText = `O número secreto é menor que ${num}`

    }else {
        resp.innerText = `O número secreto é maior que ${num}`
    }

})