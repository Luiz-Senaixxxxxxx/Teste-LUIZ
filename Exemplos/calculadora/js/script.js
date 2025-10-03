// função para adicionar um valor ao visor
function adicionar(valor){
    document.querySelector("#visor").value += valor
}
//função para limpar  visor
function limpar(){
    document.querySelector("#visor").value = ""
}
//função para apagar o último caractere
function apagar(){
    const visor = document.querySelector("#visor")
    visor.value = visor.value.slice(0,-1)
}
//função para calcular o resultado
function calcular(){
    const visor = document.querySelector("#visor")
    try{
        // usar a function eval() para calcular o resultado
        visor.value = eval(visor.value)
    }catch(error){
        visor.value = "Erro..."
    }   
}
// função para calcular a porcentagem 
function porcentagem(){
    calcular() 
    const visor = document.querySelector("#visor")
    visor.value = Number(visor.value)/100
}

//operação que transforma os botoes em variáveis clicaveis
//e cria um switch case para realizar as operações nas calculadora
const botoes = document.querySelectorAll("button")
for(const botao of botoes){
    botao.addEventListener("click", () => {
        switch(botao.innerText){
            case "C":
                limpar() 
                break;

            case "←":
                apagar() 
                break;

            case "%":
                porcentagem() 
                break;

            case "=":
                calcular() 
                break;
            default:
                adicionar(botao.innerText)
                break;
        }
    })
}