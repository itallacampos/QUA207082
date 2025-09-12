const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let soma = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            soma += i;
        }
    }

    if (soma === numero) {
        resp.innerText = `${numero} é um número perfeito`
    } else {
        resp.innerText = `${numero} não é um número perfeito`
    }
})
