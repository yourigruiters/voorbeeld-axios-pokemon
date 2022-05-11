import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import styled from "styled-components";
import Voorbeeld from "./Voorbeeld";

const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  row-gap: 50px;
  column-gap: 50px;
  width: 100%;
  height: auto;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: auto;
  background-color: #34495e;
  margin-bottom: 50px;
  padding: 25px;
`;

const NavOption = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  color: #ecf0f1;

  p {
    color: #ecf0f1;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
  }
`;

const PokemonList = () => {
  const [apiUrl, setApiUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(() => {
    fetchPokemons();
    console.log("hoi");
  }, [apiUrl]);

  const fetchPokemons = () => {
    axios.get(apiUrl).then((res) => {
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      setPokemonData(res.data.results);
    });
  };

  const handleNext = () => {
    setApiUrl(nextUrl);
  };

  const handlePrevious = () => {
    setApiUrl(prevUrl);
  };

  return (
    <div>
      <Navigation>
        <NavOption>
          {prevUrl && <p onClick={handlePrevious}>Previous</p>}
        </NavOption>
        <NavOption>{nextUrl && <p onClick={handleNext}>Next</p>}</NavOption>
      </Navigation>
      <Voorbeeld
        voornaam="Youri"
        achternaam="Gruiters"
        leeftijd={18}
        volgendePagina={handleNext}
      />
      <PokemonContainer>
        {pokemonData.map((pokemon, key) => (
          <Pokemon pokemon={pokemon} key={key} />
        ))}
      </PokemonContainer>
    </div>
  );
};

export default PokemonList;
