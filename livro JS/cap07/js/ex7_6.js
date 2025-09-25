const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    //obter senha informada pelo usuário
    const senha = frm.inSenha.value
    //vetor com erros
    const erros = []
    //verefica se o tamanho da senha é inválido
    if(senha.length < 8 || senha.length > 15){
        erros.push("Não possui entre 8 e 15 caracteres")
    }
    //verifica se não possui número 
    if(senha.match(/[0-9]/g) == null){
        erros.push("Não possui números (no mínimo 1)")
    }
    // verifica se não possui minusculas 
    if(senha.match(/[a-z]/g) == null){
        erros.push("Não possui letras minúsclas(no mínimo 1)")
    }
    // verifica se possui letras maisusculas ou se possui apenas uma
    if(senha.match(/[A-Z]/g) == null || senha.match(/[A-Z]/g) == 1 ){
        erros.push("Não possui letras maiúsclas(no mínimo 1)")
    }
    //verifica se possui caracter especial
      if(senha.match(/[W|_]/g) == null){
        erros.push("Não possui letras símbolos(no mínimo 1)")
    }
    //verifica se está vazio "null" (significa que não foi encontrado erros)
      if(erros.length == 0){
        resp.innerText = "OK! Senha Válida!"
    }else{
         //senão imprimir lista de erros
        resp.innerText = "Erro...\n"
        resp.innerText += `${erros.join("\n")}`
    }
   
})