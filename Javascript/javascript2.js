var contenedor=document.getElementById("contenido");
contenedor.innerText="Este mensaje viene de Javascript";

function mostrarMensaje() {
    alert("Hola, Javascript es divertido");
}

function leerValor() {
    const input=document.getElementById('unInput');
    const valor=input.value;
    alert("El valor es "+valor);
}