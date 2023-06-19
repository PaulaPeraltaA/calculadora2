let funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit',(evento) => {
        evento.preventDefault();
    })
}

document.getElementById('boton').onclick = function () {
    let valorHora = parseFloat(document.getElementById('valorPorHora').value)
    let valorInterfaz = parseFloat(document.getElementById('interfazHoras').value)
    let valorHTML = parseFloat(document.getElementById('horasHTML').value)
    let valorCSS = parseFloat(document.getElementById('horasCSS').value)
    let valorJava = parseFloat(document.getElementById('horasJava').value)
    

    let valorTotal = (valorHora *  valorInterfaz ) + (valorHora * valorHTML) + (valorHora * valorCSS) + (valorHora * valorJava);
    document.getElementById('valorTotal').innerHTML = valorTotal ;
}


funcionPredeterminada();
