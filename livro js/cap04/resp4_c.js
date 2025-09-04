const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const valor = Number(frm.inValor.value)
    

    if(valor < 1){
        resp1.innerText = "Saldo Insuficiente :("
        resp2.innerText = "Sem Troco"
    }else if(valor > 1.75 && valor < 3){
        const troco1 = valor - 1.75
        resp1.innerText = "Tempo: 60min"
        resp2.innerText = `Troco R$: ${troco1}`
        }else if(valor > 3.00){
        const troco2 = valor - 3.00
        resp1.innerText = "Tempo: 120min"
        resp2.innerText = `Troco R$: ${troco2}`
    }
})

