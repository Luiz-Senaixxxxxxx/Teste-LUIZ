const prompt = require("prompt-sync")() //adiciona pacote do prompt_sync
const pessoas = Number(prompt("N° Pessoas: ")) // lê dados de entrada
const peixes = Number(prompt("N° Peixes: ")) //L~e dados de entrada

let pagar 
if(peixes <= pessoas){
    pagar = pessoas * 20
}else{
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`)


