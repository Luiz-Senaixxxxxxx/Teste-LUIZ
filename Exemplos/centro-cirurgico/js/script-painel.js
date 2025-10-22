const tbody = document.querySelector("tbody")
let lsPaciente = []

const cores = {
    "Pré-Operatório": "bg-warning-subtle",
    "Em recuperação": "bg-primary-subtle",
    "Transferido": "#bg-success-subtle"
}

function atualizarTabela() {
    tbody.innerHTML = ""
    let cont = 0
    for (i of lsPaciente) {
        tbody.innerHTML +=
    `<tr>
        <td>${i.nome}</td>
          <td class="${cores[i.status]}">${i.status} (${i.local})</td>
          <td>${i.inPrevisto}</td>
          <td>${i.inCirurgia}</td>
          <td>${i.fimCirurgia}</td>
          <td>${i.saidaPrev}</td>       
        </tr>`
        cont++
    }
}

setInterval(atualizarPainel, 1000)

function atualizarPainel() {
    const hoje = new Date()
    document.querySelector("#dthora").innerText = `${hoje.getDate().toString().padStart(2, 0)}/${(hoje.getMonth() + 1).toString().padStart(2, 0)}/${hoje.getFullYear()} - ${hoje.toLocaleTimeString()}`

    if (localStorage.getItem("lsPaciente") != null) {
        lsPaciente = JSON.parse(localStorage.getItem("lsPaciente"))
        atualizarTabela()
    }
}