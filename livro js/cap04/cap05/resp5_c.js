const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let soma = 1;
    let numDivisores = `Divisores de ${numero}: 1`

    for (let i = 2; i <= numero/2; i++) {
        if (numero % i === 0) {
            soma += i;
            numDivisores += " ," + i
            // resp1.innerText = `Divisores de ${numero}  ${soma}`  = não ficar repetindo
        }

    }
    resp1.innerText = `Divisores de ${numero}:  ${numDivisores} (Soma: ${soma})`

    if (soma === numero) {
        resp2.innerText = `${numero} é um número perfeito`
    } else {
        resp2.innerText = `${numero} não é um número perfeito`
    }
    
})
