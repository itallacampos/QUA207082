const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const secreto = Math.round(Math.random()*100) //"fórmula do calcula da variável"
let tentativa = 0 //let=variavel que muda ao decorrer do projeto

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const number = Number(frm.inNumero.value)
    tentativa = tentativa +1
    if(number == secreto ){
        resp.innerText = `Parabéns, você acertou com ${tentativa} tentativas` //"${} - usa para inserir variável (colocar crase)"
        return   

    }else if(number < secreto ){  
        resp.innerText = "O número é secreto é maior"
    }else if(number > secreto){
        resp.innerText = "O número secreto é menor"        
    }

})


//diferença do else e else if: else if(coloca conteudo nos parametros) - else (não precisa de parâmetro) - obs: Estudar! 