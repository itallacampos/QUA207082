const frm = document.querySelector ("form")
const resp = document.querySelector ("h3")

frm.addEventListener ("submit", (e) => {
    e.preventDefault()
    const.numero = Number(frm.inNumero.value)
    let primo = true

    for(let 1 = 3; i <= numero / 2; i = i + 2){
        if(numero % 1 == 0 || numero % 2 == 0){
            primo = false
            break
        }
    }
}
if(numero <= 3 || numero %2 != 0 && primo){
    resp.innertext = `$ {numero} é primo`
}else{
    resp.innertext = `$(numero) NÂO é primo`
}