require("dotenv").config();
const express = require("express");
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const MONGO_URI = process.env.MONGO;
const PUERTO = process.env.PORT || process.env.PUERTO;

const app = express();
app.use(express.json());

//Me conecto a la base de datos
MongoClient.connect(MONGO_URI, function (err, db) {
  if (err) throw err;
  coleccionPokemon = db.db("db").collection("pokemon");
  app.listen(PORT, () =>
    console.log(`Servicio escuchando en el puerto: ${PUERTO}`)
  );
});
