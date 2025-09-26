const frm = document.querySelector("form")
//constante multa por atraso
const taxaMulta = 2/100
//constante juros por dia de atraso
const taxaJuros = 0.33/100
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    // obter a date de vencimento
    const dtVencimento = frm.inVenc.value
    //obter  valor da conta
    const valor = Number(frm.inValor.value)//obter o valor da conta
    //criar a variavel da data atual
    const hoje = new Date()
    //criar objeto da data de vencimento tipo Date()
    const vencimento = new Date()
    //preencher o objeto data de vencimento com os valores da data
    // data vem n o formato aaaa-mm-dd
    const parte = dtVencimento.split("-")
    vencimento.setDate(Number(parte[2]))
    vencimento.setMonth(Number(parte[1])- 1)
    vencimento.setFullYear(Number(parte[0]))
    //calcular a diferença entre datas (em ms)
    const atraso = hoje - vencimento
    //inicializar multa e juros com 0
    let multa = 0
    let juros = 0
    //se conta estiver em atraso fazer os calculos necessários 
    if(atraso > 0){
        //converter ms do atraso em dias
        // 24h * 60m * 60s * 1000ms = 86.400.000
        const dias = atraso / 86400000
        //calcular multa
        multa = valor * taxaMulta
        //calcular juros
        juros = valor * taxaJuros * dias
    }
    //calcular valor total
    const total = Number(valor + juros + multa)
    //exibir os valores 
    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = total.toFixed(2)
})