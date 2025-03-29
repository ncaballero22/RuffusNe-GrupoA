const datos = [
    { id: 1, nombre: "Juan", apellido: "Pérez", correo: "juan.perez@example.com", telefono: "1234567890", comentario: "Comentario 1" },
    { id: 2, nombre: "María", apellido: "González", correo: "maria.gonzalez@example.com", telefono: "0987654321", comentario: "Comentario 2" },
    { id: 3, nombre: "Carlos", apellido: "Ramírez", correo: "carlos.ramirez@example.com", telefono: "1122334455", comentario: "Comentario 3" },
    { id: 4, nombre: "Ana", apellido: "Martínez", correo: "ana.martinez@example.com", telefono: "2233445566", comentario: "Comentario 4" },
    { id: 5, nombre: "Luis", apellido: "Fernández", correo: "luis.fernandez@example.com", telefono: "3344556677", comentario: "Comentario 5" },
    { id: 6, nombre: "Sofía", apellido: "Lopez", correo: "sofia.lopez@example.com", telefono: "4455667788", comentario: "Comentario 6" },
    { id: 7, nombre: "Miguel", apellido: "Hernández", correo: "miguel.hernandez@example.com", telefono: "5566778899", comentario: "Comentario 7" },
    { id: 8, nombre: "Laura", apellido: "Ruiz", correo: "laura.ruiz@example.com", telefono: "6677889900", comentario: "Comentario 8" },
    { id: 9, nombre: "David", apellido: "Torres", correo: "david.torres@example.com", telefono: "7788990011", comentario: "Comentario 9" },
    { id: 10, nombre: "Gabriela", apellido: "Morales", correo: "gabriela.morales@example.com", telefono: "8899001122", comentario: "Comentario 10" }
];

const tabla = document.querySelector('#tabla');

function crearTabla(){
    let cadena = "<table>";
    cadena += "<thead>";
    cadena += "<tr>";
    cadena += "<th>ID</th>";
    cadena += "<th>Nombre</th>";
    cadena += "<th>Apellido</th>";
    cadena += "<th>Correo</th>";
    cadena += "<th>Telefono</th>";
    cadena += "<th>Comentario</th>";
    cadena += "<th>Acciones</th>";  // Columna para botones
    cadena += "</tr>";
    cadena += "</thead>";
    cadena += "<tbody>";

    for(const dato of datos){
        cadena += "<tr>";
        cadena += "<td>" + dato.id + "</td>";
        cadena += "<td>" + dato.nombre + "</td>";
        cadena += "<td>" + dato.apellido + "</td>";
        cadena += "<td>" + dato.correo + "</td>";
        cadena += "<td>" + dato.telefono + "</td>";
        cadena += "<td>" + dato.comentario + "</td>";
        cadena += `<td><button class="btn btn-eliminar" onclick="eliminarFila(this)">Eliminar</button></td>`;
        cadena += "</tr>";
    }
    cadena += "</tbody>";
    cadena += "</table>";
    tabla.innerHTML = cadena;   
}

crearTabla();

function mostrarModal(){
    document.getElementById('contenedor-formulario').style.display = "flex";
}

function cerrarFormulario(){
    document.getElementById('contenedor-formulario').style.display = "none";
}

function agregarFila(){
    const id = document.getElementById("id").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const comentario = document.getElementById("comentario").value;
    
    // Validar que no haya campos vacíos
    if(id && nombre && apellido && correo && telefono && comentario){
        // Agregar la nueva fila a la tabla
        const body = tabla.getElementsByTagName("tbody")[0];
        const nuevaFila = body.insertRow();
        nuevaFila.innerHTML = `
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${correo}</td>
            <td>${telefono}</td>
            <td>${comentario}</td>
            <td><button class="btn btn-eliminar" onclick="eliminarFila(this)">Eliminar</button></td>
        `;
        document.getElementById("formulario").reset();
        cerrarFormulario();
    }
    else{
        alert('Datos incompletos');
    }
}

function eliminarFila(boton) {
    const fila = boton.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
}