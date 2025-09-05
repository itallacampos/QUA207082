const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const ladoa = Number(frm.inLadoA.value)
    const ladob = Number(frm.inLadoB.value)
    const ladoc = Number(frm.inLadoC.value)


    if(ladoa > ladob + ladoc || ladob > ladoa + ladoc > ladoa + ladob){
        resp1.innerText = "Não pode ser um triângulo"
        return        
    }
    if(ladoa == ladob && ladoa == ladoc){  
        resp1.innerText = "Lados formam um Triângulo"
        resp2.innerText = "Equilátero"  
    
    
    }else if(ladoa == ladob && ladoa != ladoc){
        resp1.innerText = "Lados formam um Triângulo"
        resp2.innerText = "Isóceles"
        
    }else if(ladoa != ladob && ladoc != ladoa){
        resp1.innerText = "Lados formam um Triângulo"
        resp2.innerText = "Escaleno"
        
    }
    
})

