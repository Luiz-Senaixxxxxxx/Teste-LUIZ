const frm = document.querySelector("form")
const respNome = document.querySelector("h3")
const respLista = document.querySelector("pre")

const pacientes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inPaciente.value
    pacientes.push(nome)
    let lista = ""
    // for tradicional (Inicia em 0, enquanto menor que o tamanho do vetor)
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`
    }
    respLista.innerText = lista // exibe a lista de pacients na página
    frm.inPaciente.value = "" // lima conteúdo do campo form
    frm.inPaciente.focus() // posiciona o cursor no campo
})

frm.inUrgencia.addEventListener("click", () => {
    //verifica se as validações do fomr estão ok
    //no caso, paciente is required
    if (!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido com urgência")
        frm.inPaciente.focus()
        return
    }
    const nome = frm.inPaciente.value
    pacientes.unshift(nome) // adiciona paciente no inicio do vetor
    //forEach aplicado sobre o array
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})

frm.inAtender.addEventListener("click", () => {
    //se o tamanho do vetro = 0
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }
    const atender = pacientes.shift() //remover do inicio da fila (e obtem o nome)
    respNome.innerText = atender // exibe o nome do paciente em atendimento
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista
})