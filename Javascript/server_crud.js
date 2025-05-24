/*server_crud.js
C ---> create
R ---> Retrieve
U ---> Update
D ---> Delete */

const express = require('express');
const cors = require('cors');

const app=express();
const port=3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const {MongoClient} = require('mongodb');
//No olvides colocar tu password
const uri='mongodb+srv://nicolascaballero289:Iris2024@cluster0.1ml0c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const cliente= new MongoClient(uri);

//crear ruta
app.post('/insertar', async(req,res)=>{
    try {
        await cliente.connect();
        const db=cliente.db('DataBaseGrupoA');
        const coleccion=db.collection('users');
        await coleccion.insertOne({usuario: 'pepe', password:'papulandia'});
        res.send("Documento agregado exitosamente");
    } finally{
        await cliente.close();
    }
});

app.listen(port, ()=>{
    console.log(`Server listening at https://localhost:${port}`);
});