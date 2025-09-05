const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const secreto = Math.round(Math.random()*100)
let tentativa = 0

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const number = Number(frm.inNumero.value)
    
    if(number == secreto ){
        resp.innerText = `Parabéns, você acertou com ${tentativa} tentativas`
        return   

    }else if(number < secreto ){  
        resp.innerText = "O número é secreto é maior"
        tentativa = tentativa +1
        
       
    }else if(number > secreto){
        resp.innerText = "O número secreto é menor"
        tentativa = tentativa +1
        
    }

})


