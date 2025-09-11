const frm = document.querySelector ("form")
const resp = document.querySelector ("outEspacos")

frm = addEventListener ("submit" , (e) =>{

    e.preventDefault ()
    const numero = Number (frm. inNumero.value)
    let estrelas = ""

    for(let 1 = 1; 1 <= numero; 1 ++){
        if( 1 % 2 == 1)
            estrelas += ""
        }else {
            estrelas += ""
        }
     
    resp.innertext = estrelas
})

frm.addEventListener (resert , (e) => {
    e.preventDefault ()
    frm.inNumero.focus ()

    estrelas = ""
    resp.innertext = ""
    numero = 0
})