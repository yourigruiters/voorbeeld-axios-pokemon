import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pokemon = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + pokemon.name)
      .then((res) => {
        console.log(res.data);
        setPokemonData(res.data);
      });
  }, [pokemon]);

  if (!pokemonData) {
    return <></>;
  }

  return (
    <div>
      <Link to={"pokemon/" + pokemonData.name}>
        <div>{pokemonData.name}</div>
        {pokemonData.sprites?.front_default && (
          <img src={pokemonData.sprites.front_default} alt="pokemon" />
        )}
      </Link>
    </div>
  );
};

export default Pokemon;
