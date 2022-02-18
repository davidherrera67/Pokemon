require("dotenv").config();
const PUERTO = process.env.PORT || process.env.PUERTO;
const db = require("./db.js");

const express = require("express");
const app = express();
app.use(express.json());

app.get("/pokemon", async (req, res) => {
  try {
    let pokemons = await db.encontrarPokemons();
    res.send(pokemons);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.get("/pokemon/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let pokemon = await db.encontrarPokemonPorId(id);
    res.send(pokemon);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.post("/pokemon", async (req, res) => {
  try {
    pokemon = req.body;
    pokemonPost = db.Instrument(pokemon);
    await db.guardarPokemonEnBD(pokemonPost);

    await createAddRecord(pokemonPost);

    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
});

//Me conecto a la base de datos
//MongoClient.connect(MOONGOSE, function (err, db) {
//if (err) throw err;
//coleccionPokemon = db.db("db").collection("pokemon");
app.listen(PUERTO, () =>
  console.log(`Servicio escuchando en el puerto: ${PUERTO}`)
);
//});
