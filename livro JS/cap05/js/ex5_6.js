const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let primo = true
    //percorre as os possiíveis divisores ímpares iniciando em 3 até metdade do número
    for(let i = 3; i <= numero / 2; i = i + 2){ 
        if(numero % i == 0){ // Verifica se i (3,5,7...) é divisor do número
            primo = false // mudar flag
            break // sair do loop   
        }
    }
    if((numero <= 3 || numero % 2 != 0) && primo){
        resp.innerText = `${numero} é primo`
    }else{
        resp.innerText = `${numero} não é primo`
    }
})