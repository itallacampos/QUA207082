const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inPaciente.value
    pacientes.push(nome)
    let lista = ""
    //for "tradicional" (inicia em 0, enquanto menor que tamanho do vetor)
    for(let i = 0; i < pacientes.length; i++){
        lista += `${i+1}. ${pacientes[i]}\n`
    }
    respLista.innerText = lista //exibe a lista de pacientes na página 
    frm.inPaciente.value = "" //lima conteúdo do campo form
    frm.inPaciente.focus() //posiciona o curso no campo

})

frm.btUrgencia.addEventListener("click", () => {
    // verifica se as validações do form estão ok
    // no caso, paciente is require
    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido com urgencia")
        frm.inPaciente.focus()
        return
    }
    const nome = frm.inPaciente.value
    pacientes.unshift(nome) //adiciona paciente no inicio do vetor
    //forEach aplicado sobre o array paciente
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i}. ${paciente}\n`))
    respLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})
