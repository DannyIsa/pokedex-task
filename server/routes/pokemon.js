const { Router } = require("express");
const { default: axios } = require("axios");
const pokemon = Router();

pokemon.get("/:name", (request, result) => {
  let { name } = request.params;

  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
    console.log(response.data.types);
    const types = [];
    response.data.types.forEach((type) => {
      types.push(type.type.name);
    });
    let data = {
      name: response.data.forms[0].name,
      height: response.data.height,
      weight: response.data.weight,
      type: types,
      front_url: response.data.sprites.front_default,
      back_url: response.data.sprites.back_default,
    };
    result.send(data).status(200);
  });
});

module.exports = pokemon;
