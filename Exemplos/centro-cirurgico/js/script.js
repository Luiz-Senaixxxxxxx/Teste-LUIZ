const frm = document.querySelector("form")
const tboddy = document.querySelector("tbody")

lsPaciente = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const paciente = frm.inNome.value
    const status = frm.inStatus.value
})

const cores = {
    
    "Pré Operatório": "bg-danger-subtle",
    "Em Recuperação": "bg-primary-subtle",
    "Transferido": "bg-secondary-subtle"
}

function atualizarTabela() {
    // frm.inIndex.value = ""
    // frm.btNovo.dispatchEvent(new Event("click"))
    limpar()
    localStorage.setItem("lsPaciente", JSON.stringify(lsPaciente))
    tboddy.innerHTML = ""
    let cont = 0
    for (let i of lsPaciente) {
        if (filtro == "" || filtro.includes(i.status)) {
            tboddy.innerHTML +=
             `<tr onclick= "prepararEdicao(${cont})">
                <td>${i.item}</td>
                <td class="${cores[i.status]}">${i.status}</td>
            </tr>`
        }
        cont++
    }
}

frm.btApagar.addEventListener("click", () => {
    const index = frm.inIndex.value
    if (index == "") {
        alert("Necessário selecionar 1 item.")
        return
    }
    if (confirm("Deseja realmente apagar esse item?") == false) {
        return
    }
    const lineNumber = frm.lineNumber.value
    deleteRow(lineNumber).then(() => {
        lsItem.splice(index, 1)
        atualizarTabela()
    })
})