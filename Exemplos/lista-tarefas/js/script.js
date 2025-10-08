const frm = document.querySelector("form")
const tboddy = document.querySelector("tbody")

const lsItem = []


frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const item = frm.inItem.value
    const status = frm.inStatus.value
    const index = frm.inIndex.value
    index == "" ? lsItem.push({ item, status }) : lsItem[index] = { item, status }
    atualizarTabela()

})

function prepararEdicao(index) {
    frm.inItem.value = lsItem[index].item
    frm.inStatus.value = lsItem[index].status
    frm.inIndex.value = index
    frm.btApagar.disabled = false
}

frm.btApagar.addEventListener("click", () => {
    const index = frm.inIndex.value
    if (index == "") {
        alert("Necessário selecionar 1 item.")
        return
    } else {
        const decisao = prompt("Tem certeza que deseja apagar?")
        if (decisao == "sim".toLowerCase(decisao)) {

            lsItem.splice(index, 1)
            atualizarTabela()

        }else if(decisao == "nao".toLowerCase(decisao) || "não".toLowerCase(decisao)){
            alert("Ufa, foi só um engano")
        }else{
            alert("Por favor, escreva entre 'sim' ou 'não'...")
        }
    }
})

function atualizarTabela() {
    // frm.inIndex.value = ""
    // frm.btNovo.dispatchEvent(new Event("click"))
    limpar()
    localStorage.setItem("lsItem", JSON.stringify(lsItem))
    tboddy.innerHTML = ""
    let cont = 0
    for (let i of lsItem) {
        tboddy.innerHTML +=
            `<tr onclick= "prepararEdicao(${cont})">
                <td>${i.item}</td>
                <td>${i.status}</td>
            </tr>`
        cont++
    }
}
function limpar() {
    frm.inItem.value = ""
    frm.inStatus.value = ""
    frm.inIndex.value = ""
    frm.btApagar.disabled = true
}

if (localStorage.getItem("lsItem") != null) {
    lsItem = JSON.parse(localStorage.getItem("lsItem"))
    atualizarTabela()
}