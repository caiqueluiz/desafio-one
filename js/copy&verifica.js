botaoCopy.addEventListener('click',function(event){
    event.preventDefault()
    resultado.select()
    document.execCommand('copy')
    texto.value = ''
})

function caracteres(frase_teste) {
    if (!regex.test(frase_teste)) {
        return "Verifique se à caracteres especiais!"
    } else {
        return  frase_teste;
    }
}