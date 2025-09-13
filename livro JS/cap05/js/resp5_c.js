const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    let num = Number(frm.inNumero.value)
    let soma = 1
    let numDivisores = `Divisores de ${num}: 1`
    

    for(let i = 2; i <= num / 2; i++ ){
        if(num % i == 0 ){
            soma += i
            numDivisores += " ," + i  
        }
    }
    resp1.innerText = ` ${numDivisores} (Soma ${soma})`
    if(soma == num){
        resp2.innerText = `Número ${num} é perfeito `
    }else{
        resp2.innerText = `Número ${num} NÃO é perfeito `
    }
})




