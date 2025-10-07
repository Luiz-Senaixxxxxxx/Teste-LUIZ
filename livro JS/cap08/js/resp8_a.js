const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    resp.innerText = nome+"\n"
    resp.innerText += retornarTracos(nome) +"\n"
    resp.innerText += "Categoria: "+  categorizarAtleta(idade)
    
})

function retornarTracos(nome){
    let retorno = ""
    for(const letra of nome){
        if(letra != " "){
            retorno += "-"
        }else{
            retorno += " "
        }
    }
    return retorno
}

function categorizarAtleta(idade){
    let retorno = ""
    if(idade < 13 && idade > 0){
        retorno = "Infantil"
    }else if(idade >= 13 && idade <= 18){
        retorno= "Juvenil"
    }else{
        retorno = "Adulto"
    }
    return retorno
}