const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)

    categorizarAtleta()
})

function retornarTracos(nome){
    const nomes = frm.inNome.value
    for(const nome of nomes){
        nome.join("-")
    }
}

function categorizarAtleta(idade){

  //  const idade = Number(frm.inIdade.value)

    if(idade < 13 && idade > 0){
        resp.innerText = "Infantil"
    }else if(idade >= 13 && idade <= 18){
        resp.innerText = "Juvenil"
    }else{
        resp.innerText = "Adulto"
    }
}