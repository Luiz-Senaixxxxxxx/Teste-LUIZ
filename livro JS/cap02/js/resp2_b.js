const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    const tempoDeUso = Number(frm.inTempo.value);

    const valorHora = Number(frm.inValor.value);
    const valorConsumido = Math.ceil(tempoDeUso / 15) * valorHora;

    resp.innerText = `Valor a pagar de R$: ${valorConsumido.toFixed(2)}`;

    e.preventDefault()
})