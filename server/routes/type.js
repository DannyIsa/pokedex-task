const { default: axios } = require("axios");
const { Router } = require("express");

const type = Router();

type.get("/:type", (req, res) => {
  let { type } = req.params;
  axios.get(`https://pokeapi.co/api/v2/type/${type}`).then((response) => {
    const data = [];
    response.data.pokemon.forEach((pokemon) => data.push(pokemon.pokemon.name));
    res.send(data);
  });
});

module.exports = type;
