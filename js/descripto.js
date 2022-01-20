botaoDescripto.addEventListener('click', function(event){
    event.preventDefault()
    resultado.textContent = caracteres(descripto(texto.value))
    texto.value = ''
})

function descripto(texto) {
    let textoDescripto = texto.replace(/enter/gi, 'e')
        .replace(/imes/gi, 'i')
        .replace(/ai/gi, 'a')
        .replace(/ober/gi, 'o')
        .replace(/ufat/gi, 'u').toLowerCase()
    return textoDescripto
}