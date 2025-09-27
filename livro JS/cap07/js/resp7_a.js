const frm = document.querySelector("form")
const resp = document.querySelector("h3")

let letrasPares = "";
let letrasImpares = "";


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const msg = frm.inMsg.value

    for (let i = 0; i < msg.length; i++) {
        if (i % 2 === 0) {
            letrasPares += mensagem[i];
        } else {
            letrasImpares += mensagem[i];
        }
    }
    const criptografada = letrasPares + letrasImpares;
    
    resp.innerText = `${criptografada}`
    
})

frm.btDescript.addEventListener("click", () =>{


})

// // Exemplo de uso:
// const mensagemOriginal = "Olá mundo!";
// const mensagemCriptografada = criptografarMensagem(mensagemOriginal);

// alert(`Mensagem Original: ${mensagemOriginal}`);
// alert(`Mensagem Criptografada: ${mensagemCriptografada}`);
// // Saída: Mensagem Criptografada: l oadm!o