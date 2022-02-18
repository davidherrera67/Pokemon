const mongoose = require("mongoose");
require("dotenv").config();

const PokemonSchema = new mongoose.Schema({
  tipo: { type: String, required: true },
  naturaleza: { type: String, required: true },
  nombre: { type: String, required: true },
  ataque: { type: Number, required: true },
  defensa: { type: Number, required: true },
  nivel: { type: Number, required: true },
  apodo: { type: String, required: false},
});

const EntrenadorSchema = new mongoose.Schema({
  edad: { type: Number, required: true }, //ojo number quiero integer
  apellido: { type: String, required: false },
  nombre: { type: String, required: true },
  medallas: { type: Number, required: true },
  gorra: { type: Boolean, required: false },
  ciudadNacimiento: {type: String, required: false},
});

const Pokemon = mongoose.model("Pokemon", PokemonSchema);
const Entrenador = mongoose.model("Entrenador", EntrenadorSchema);

exports.Entrenador = Entrenador;
exports.Pokemon = Pokemon;

exports.connect = async function () {
  mongoose.connect(process.env.MONGOOSE); //MI BASE DE DATOS
};

exports.disconnect = mongoose.disconnect;

exports.encontrarPokemons = async function () { //hacer exports.encontrarPokemons
  return await Pokemon.find({});
}; //get todos los pokemons

const encontrarPokemonPorId = async function (idPokemon) {
  return await Pokemon.findOne({ _id: idPokemon });
};

exports.guardarPokemonEnBD = async function (pokemon) {
  await pokemon.save();
};

exports.borrarPokemonDeBD = async function (idPokemon) {
  await Pokemon.deleteOne({ _id: idPokemon });
};

exports.actualizarPokemon = async function (idPokemon, pokemon) {
  var actualizarPokemon = await encontrarPokemonPorId(idPokemon);
  actualizarPokemon.tipo = pokemon.tipo; //ojo este Pokemon es como el de schema cuidado, usar el de parametro
  actualizarPokemon.naturaleza = pokemon.naturaleza;
  actualizarPokemon.nombre = pokemon.nombre;
  actualizarPokemon.ataque = pokemon.ataque;
  actualizarPokemon.defensa = pokemon.defensa;
  actualizarPokemon.nivel = pokemon.nivel;
  actualizarPokemon.apodo = pokemon.apodo;
  await actualizarPokemon.save();
};

exports.encontrarEntrenador = async function () {
  return await Entrenador.find({});
};

const encontrarEntrenadorPorId = async function (idEntrenador) {
  return await Entrenador.findOne({ _id: idEntrenador });
};

exports.guardarEntrenadorEnBD = async function (entrenador) {
  await entrenador.save();
};

exports.borrarEntrenadorDeBD = async function (idEntrenador) {
  await Entrenador.deleteOne({ _id: idEntrenador });
};

exports.actualizarEntrenador = async function (idEntrenador, entrenador) {
  var actualizarEntrenador = await encontrarEntrenadorPorId(idEntrenador);
  actualizarEntrenador.edad = entrenador.edad;
  actualizarEntrenador.apellido = entrenador.apellido;
  actualizarEntrenador.nombre = entrenador.nombre;
  actualizarEntrenador.medallas = entrenador.medallas;
  actualizarEntrenador.gorra = entrenador.gorra;
  actualizarEntrenador.ciudadNacimiento = entrenador.ciudadNacimiento;
  await actualizarEntrenador.save();
};


//exports
//exports.encontrarPokemons = encontrarPokemons; este hecho antes
exports.encontrarPokemonPorId = encontrarPokemonPorId;
exports.encontrarEntrenadorPorId = encontrarEntrenadorPorId;

insertar(); //post
borrar(); //delete
