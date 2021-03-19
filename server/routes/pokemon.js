const { Router } = require("express");
const { default: axios } = require("axios");
const pokemon = Router();

pokemon.get("/:name", (request, result) => {
  let { name } = request.params;

  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
    let data = {
      name: response.data.forms[0].name,
      height: response.data.height,
      weight: response.data.weight,
      type: response.data.types[0].type.name,
      front_url: response.data.sprites.front_default,
      back_url: response.data.sprites.back_default,
    };
    result.send(data).status(200);
  });
});

module.exports = pokemon;
