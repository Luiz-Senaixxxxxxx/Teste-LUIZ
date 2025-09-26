const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    const msg = frm.inMsg.value

    const criptografia = msg.split(" ")
    const tam = criptografia.length
    for(let i = 0; i< tam; i++){
        if(criptografia.length % 2 == 0){
            
        }
    }
})