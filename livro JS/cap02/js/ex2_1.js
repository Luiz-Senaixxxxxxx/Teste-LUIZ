const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("keyup", (e) => {
const nome = frm.inNome.value // obtém o nome digitado no form
resp.innerHTML = `Olá <i>${nome}</i>` // exibe a resposta do programa
e.preventDefault() // evita envio do form
})