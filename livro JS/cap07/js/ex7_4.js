const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    //obter o nome informado e retirar espaços em branco do inicio e final da string
    const nome = frm.inNome.value.trim()
    // se o nome não (!) possuir espaço, alert para inserir o nome completo
    if(nome.includes(" ") == false){
        alert("Informe o nome completo...")
        return
    }
    // gravar a popsição ddo primeiro espaço
    const priEspaco = nome.indexOf(" ")
    // gravar a posição do último ESAÇO
    const UltEspaco = nome.lastIndexOf(" ")
    // copia nome e sobrenome usando os parâmetros de subtr()
    const cracha = nome.substr(0, priEspaco) + nome.substr(UltEspaco)
    // exibir resposta
    resp.innerText = cracha
})