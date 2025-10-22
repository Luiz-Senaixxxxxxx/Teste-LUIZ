const frm = document.querySelector("form")
const tbody = document.querySelector("tbody")
let lsPaciente = []

let filtro = localStorage.getItem("filtro")
filtro = filtro == null ? "" : filtro

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const status = frm.inStatus.value

    const local = frm.inLocal.value
    const inPrevisto = frm.inInicioPrevisto.value
    const inCirurgia = frm.inInicioCirurgia.value
    const fimCirurgia = frm.inFimCirurgia.value
    const saidaPrev = frm.inSaidaPrevisto.value

    const index = frm.inIndex.value

    index == "" ? lsPaciente.push({ nome, status, local, inPrevisto, inCirurgia, fimCirurgia, saidaPrev }) : lsPaciente[index] = { nome, status, local, inPrevisto, inCirurgia, fimCirurgia, saidaPrev }
    atualizarTabela()
})

function prepararEdicao(index) {
    frm.inNome.value = lsPaciente[index].nome
    frm.inStatus.value = lsPaciente[index].status

    frm.inLocal.value = lsPaciente[index].local
    frm.inInicioPrevisto.value = lsPaciente[index].inPrevisto
    frm.inInicioCirurgia.value = lsPaciente[index].inCirurgia
    frm.inFimCirurgia.value = lsPaciente[index].fimCirurgia
    frm.inSaidaPrevisto.value = lsPaciente[index].saidaPrev

    frm.inIndex.value = index
    frm.btApagar.disabled = false
}

frm.btApagar.addEventListener("click", () => {
    const index = frm.inIndex.value

    if (index == "") {
        alert("Necessário selecionar 1 paciente.")
        return
    }

    if (confirm("Deseja realmente apagar esse paciente?") == false) {
        return
    }

    lsPaciente.splice(index, 1)
    atualizarTabela()
})

const cores = {
    "Pré-Operatório": "bg-warning-subtle",
    "Em recuperação": "bg-primary-subtle",
    "Transferido": "#bg-success-subtle"
}

function atualizarTabela() {
    limpar()
    localStorage.setItem("lsPaciente", JSON.stringify(lsPaciente))
    tbody.innerHTML = ""
    let cont = 0
    for (i of lsPaciente) {
        if (filtro == "" || filtro.includes(i.status)) {
            tbody.innerHTML += `<tr onclick="prepararEdicao(${cont})">
        <td>${i.nome}</td>
          <td class="${cores[i.status]}"> ${i.status} (${i.local}) </td>
          <td>${i.inPrevisto}</td>
          <td>${i.inCirurgia}</td>
          <td>${i.fimCirurgia}</td>
          <td>${i.saidaPrev}</td>       
        </tr>`
        }
        cont++
    }
}

function limpar() {
    frm.inNome.value = ""
    frm.inStatus.value = ""
    frm.inLocal.value = ""
    frm.inInicioPrevisto.value = ""
    frm.inInicioCirurgia.value = ""
    frm.inFimCirurgia.value = ""
    frm.inSaidaPrevisto.value = ""
    frm.inIndex.value = ""
    frm.inNome.focus()
    frm.btApagar.disabled = true
}

if (localStorage.getItem("lsPaciente") != null) {
    lsPaciente = JSON.parse(localStorage.getItem("lsPaciente"))
    atualizarTabela()
}