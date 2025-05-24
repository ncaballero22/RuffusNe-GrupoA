const express=require('express');
const app=express();
const port=3000;
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("Hola mundo desde mi servidor Node-Express Siuuuuu");
});

app.get('/Mondongo', (req,res) => {
    res.sendFile(__dirname+"/SIU.html");
});

app.post('/enviar',(req,res) => {
    const nombre=req.body.nombre;
    const mensaje=`Hola tonotos ${nombre}`;
    res.send(mensaje);
});

app.listen(port,() => {
    console.log(`Server attending at ${port}`);
});