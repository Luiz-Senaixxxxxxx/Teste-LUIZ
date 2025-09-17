const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = []
const sorteado = Math.floor(Math.random() * 100) +1
const chances = 6

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    if(num == sorteado){
        respDica.innerText = `Parabéns!!! o número sorteado é ${num}`
        frm.btSubmit.disabled = true // troca status dos botões
        frm.btNovo.className = "exibe"
    }else{
        //erros.push(num) // adiciona número ao vetor
        if(erros.includes(num)){ // se o número existe no vetor erros
            alert(`Você já apostou o número ${num}. Tente outro`)
        }else{
            erros.push(num) // adiciona o número ao vetor erros
            const numErros = erros.length // obtém o tamanho do vetor
            const numChances = chances - numErros // calcula nº de chances
            //exibe nº erros, conteúdo do vetor e nº de chances
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            if(numChances == 0){
                alert("Suas chances acabaram...")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDica.innerText = `Game Over!! O Número Sorteado Era: ${sorteado}`
            }else{
                //usa operador ternário para mensagem de dica
                const dica = num < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: Tente um número ${dica} que ${num}`
                //respChances.innerText = ` Você ainda tem ${numChances} tentativas.`
            }
        }
    }
     frm.inNumero.value = ""
     frm.inNumero.focus()
})
frm.btNovo.addEventListener("click", () =>{
    location.reload() // recarrega a pagina
})