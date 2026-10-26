
const botonAlerta = document.getElementById("alerta");
const botonParrafo = document.getElementById("actualizar-texto");
const parrafo = document.getElementById("texto");


function mostrarAlerta(){
    alert("Hola Erik");
}


function actualizarTexto(){
    parrafo.innerHTML = "¡Texto actualizado con Javascript!";
}


botonAlerta.addEventListener("click", mostrarAlerta);
botonParrafo.addEventListener("click", actualizarTexto);




