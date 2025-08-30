const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e)=> {
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    const promocaoProduto = preco * 0.5;
    const promocaoTotal = (preco * 3) - promocaoProduto;

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${promocaoTotal.toFixed(2)}`;
    resp2.innerText = `O 3° produto custa apenas R$: ${promocaoProduto.toFixed(2)}`;

    e.preventDefault()
})