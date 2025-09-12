const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let resposta = ""
    const chinchilas = Number(frm.inNome.value)
    const ano = Number(frm.inNumero.value)

    for (let i = 1; 1 <= ano; i++) {
        if (i < 2) {
            resposta += `${1}º ano ${chinchilas} Chinchilas\n`
        } else {
            if (chinchilas >= 2) {
                resposta += `${1}º ano ${(chinchilas * 3) * i} chinchilas\n`
            }
            else {
                resposta = "Não tem chinchilas suficientes para fazer uma estimativa"
            }
        }
    }
})




