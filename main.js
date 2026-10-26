
const botonPintar = document.getElementById("boton-act");
const botonLimpiar = document.getElementById("boton-limp");
const parrafo = document.getElementById("texto");


function actualizarTexto(){
    parrafo.innerHTML = "¡Texto actualizado con Javascript!";
}


function limpiarTexto(){
    parrafo.innerHTML = "";
}


botonPintar.addEventListener("click", actualizarTexto);

botonLimpiar.addEventListener("click", limpiarTexto);



