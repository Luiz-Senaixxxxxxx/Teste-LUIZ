const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const msg = frm.inMsg.value
    let criptografia = ""

    for (let i = 1; i < msg.length; i++) {
        criptografia += msg.charAt(i);
    }
    for (let i = 0; i < msg.length; i = i + 2) {
        criptografia += msg.charAt(i);
    }
    resp.innerText = criptografia
})

frm.btDescript.addEventListener("click", () => {

    const criptografada = frm.inMsg.value
    let temp = criptografada.substr(0,criptografada.length/2)

    const msg = []
    //variável auxiliar para simar os pares
    let aux = 1
    for (let i = 0; i < temp.length; i++) {
         //colocar na posição par
        msg[aux] = temp.charAt(i)
        //incremento do próximoo número par
        aux += 2
    }
    temp = criptografada.substr(criptografada.length/2)
    //variável auxiliar para simar os impares
    aux = 0
    for (let i = 0; i < temp.length; i++) {
        //colocar na posição impar
        msg[aux] = temp.charAt(i)
        //incremento do próximoo número impar
        aux += 2
    }
})

