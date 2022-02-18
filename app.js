require("dotenv").config();
const PUERTO = process.env.PORT || process.env.PUERTO;
const db = require("./db.js");

const express = require("express");
const app = express();
app.use(express.json());



//Me conecto a la base de datos
//MongoClient.connect(MOONGOSE, function (err, db) {
  //if (err) throw err;
  //coleccionPokemon = db.db("db").collection("pokemon");
  app.listen(PUERTO, () =>
    console.log(`Servicio escuchando en el puerto: ${PUERTO}`)
  );
//});
