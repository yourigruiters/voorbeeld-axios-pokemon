import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PokemonPage = () => {
  const [pokemonData, setPokemonData] = useState([]);

  const { pokemon } = useParams();

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon).then((res) => {
      console.log(res.data);
      setPokemonData(res.data);
    });
  }, []);

  return (
    <div>
      <div className="link">{pokemonData.name}</div>
    </div>
  );
};

export default PokemonPage;
