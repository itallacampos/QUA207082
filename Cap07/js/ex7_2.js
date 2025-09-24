const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    //conteúdo do campo em maiúsculas
    const palavra = frm.inFruta.value.toUpperCase()

    //limpar resposta
    resp.innerText = ""

    //percorrer todos os caracteres da palavra
    for (const letra of palavra) {
        if (letra == palavra.charAt(0)) {//se letra igual a letra inicial da string
            resp.innerText += letra
        } else {//senão colocar o_
            resp.innerText += "_"

        }
    }

    //preencher com "*", conforme o tamanho
    frm.inFruta.value = "*".repeat(palavra.lenghtW)

})