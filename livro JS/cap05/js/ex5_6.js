const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let numeroDivisor = 0 // Declara e inicializa contador
    for(let i = 1; i <= numero; i++){ //percorre todos os possíveis divisores de numero
        if(numero % i == 0){ // se é, incremente contador
            numeroDivisor++
        }
    }
    if(numeroDivisor == 2){
        resp.innerText = `${numero} é primo`
    }else{
        resp.innerText = `${numero} não é primo`
    }
})