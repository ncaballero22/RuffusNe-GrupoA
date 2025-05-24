//promesa_async.js

const datos=[
    {id:1, title:'Adolescencia',year:2025},
    {id:2, title:'Godless',year:2017},
    {id:3, title:'Gambito de dama',year:2024}
];

//Modo sincrono
// function getDatos(){
//     return datos;
// }

//Modo sincrono con funcion flecha
/*const getDatos = () =>{
    return datos;
}
*/
//Simulando un modo de ejecucion asincrono

const promesaCumplida=true;
const promesa = new Promise((resolve,reject)=>{
    if (promesaCumplida){
        resolve('Promesa cumplida');
    }
    else{
        reject('Promesa no alcanzada...');
    }
});


const getDatos = () =>{
    return new Promise((resolve,reject)=>{
        if(datos.length===0){
            reject(new Error('Arreglo vacio'));
        }
        else{
            setTimeout(() => {
            resolve(datos);
            },3000);
        } 
    });   
}

getDatos().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error.message);
});



// async function obtieneDatos(){
// const resultado = await getDatos();
// console.log(resultado);
// }

// obtieneDatos();
// console.log("Aqui esperando tilin");
// console.log("Esto va despues de los datos");