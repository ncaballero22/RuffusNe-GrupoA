const express=require('express');
const cors=require('cors');
const app=express();
const port=3000;

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const {MongoClient, ServerApiVersion} = require('mongodb');

const uri='mongodb+srv://nicolascaballero289:Iris2024@cluster0.1ml0c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName);
    vehiculosCollection = db.collection(collectionName);
    console.log('Conectado a MongoDB Atlas');
  })
  .catch(error => console.error('Error de conexión:', error));

app.post('/vehiculos', async (req, res) => {
    try {
      const result = await vehiculosCollection.insertOne(req.body);
      res.status(201).json(result.ops[0]);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});

app.get('/vehiculos/:id', async (req, res) => {
    try {
      const vehiculo = await vehiculosCollection.findOne({ id: req.params.id });
      if (!vehiculo) return res.status(404).json({ error: "Vehículo no encontrado" });
      res.json(vehiculo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});