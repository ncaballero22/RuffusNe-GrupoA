function llamaDoublelClick(event){
    cuadroAzul.textContent="Tocaste 2 veces el chilito";
}

function logEvent(evento){
    console.log(`El evento ${evento.type} fue disparado`)
    console.log(`El evento ${evento.type} fue fallado`)
    console.log(`El chilito ${evento.type} fue rozado`)
}

function agregarClase(event){
    cuadroSalmon.classList.add('claseNueva');
}

const cuadroAzul=document.querySelector('#miId');
//const cuadroAzul=document.getElementById('miId');

cuadroAzul.textContent="Este texto viene de Javascript";
cuadroAzul.innerText="Este texto remplaza el anterior";
cuadroAzul.innerHTML="<h1>Esto es un titulo</h1>";

const cuadroSalmon=document.querySelector('.miClase');
cuadroSalmon.textContent="Contenido en MiClase";

//Vamos a los eventos

//forma anonima
cuadroAzul.addEventListener('click', () => {
    cuadroAzul.textContent="Me tocaste el chilito";
});

//nombre de funcion
cuadroAzul.addEventListener('dblclick', llamaDoublelClick)
cuadroSalmon.addEventListener('mouseover', logEvent);
cuadroAzul.addEventListener('mousedown', logEvent);
cuadroSalmon.addEventListener('mouseout', logEvent);


cuadroSalmon.addEventListener('dblclick', agregarClase);