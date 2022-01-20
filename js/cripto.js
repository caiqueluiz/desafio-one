botaoCripto.addEventListener('click', function(event){
    event.preventDefault()
    resultado.textContent = caracteres(encripta(texto.value))
    texto.value = ''
})

function encripta(texto){ 
    let novoTexto = texto.replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat').toLowerCase()
    return novoTexto
}