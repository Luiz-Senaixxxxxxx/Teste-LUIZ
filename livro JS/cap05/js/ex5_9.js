const prompt = require("prompt-sync")()
const produto = prompt("Produto: ")
const num = Number(prompt("N° de etiquetas: "))
// Cria laço de repetição até numero / 2
for(let i = 1; i <= num / 2; i++){
    console.log(`${produto.padEnd(30, '-')} ${produto.padEnd(30, ':')}`)
}
if(num % 2 == 1){ // Se quantidade de etiquetas for ímpar
    console.log(produto) // imprime mais uma etiqueta
}