const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    //obter senha informada pelo usuário
const senha = frm.inSenha.value
    //vetor com erros
const erros = []
    //verificar se não possui número
if(senha.length < 8 || senha.length > 15){
    erros.push("Não possui entre 8 e 15 caracteres")
}
    //verificar se não possui minúsculas
if(senha.match(/[0-9]/g) == null){
    erros.push("Não possui números (no mínimo 1)")
}
    //verificar se possui letras maiúsculas ou se possui apenas 1
if(senha.match(/[a-z]/g) == null){
    erros.push("Não possui letras minúsculas (no mínimo 1")
}
    //verificar se não possui símbolos ou "_"
if(senha.match(/[A-Z]/g) == null || senha.match(/[A-Z]/g).length < 2){
    erros.push("Não possui letras maiúsculas (no minimo 2)" )
}
    //se o vetor estiver vazio (significa que não foi encontrado erros)

if(senha.match(/[\W|_]/g) == null){
    erros.push(("Não possui símbolos (no minimo1)")) 

}if(erros.length == 0){
    resp.innerText = "Ok! Senha Válida!"
}
else{
    resp.innerText = "Erro...\n"
    resp.innerText += `${erros.join("\n")}`
}
    //senão imprimir listas de erros
})