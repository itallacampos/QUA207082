const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e)=> {
    e.preventDefault(); //evita o envio do formulário
    const nome = frm.inNome.value; // obtém o conteúdo dos campos
    const nota1 = Number(frm.inNota1.value); // obtém o conteúdo dos campos
    const nota2 = Number(frm.inNota2.value); // obtém o conteúdo dos campos

    const media = (nota1 + nota2) / 2; //calcula a média das notas

    resp1.innerText = `A média das notas ${media.toFixed(2)}`

    if (media >= 7) {
        // mensagem de aprovado e na cor azul
        resp2.innerText = `Parabéns ${nome} Aprovado(a)!`
        resp2.style.color = 'blue'
    } else {
        resp2.innerText = `Ops ${nome} Reprovado(a)!`
        resp2.style.color = 'red'
    }
})