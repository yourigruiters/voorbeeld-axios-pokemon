import React from "react";
import { Routes, Route } from "react-router-dom";
import PokemonPage from "./components/pokemon/PokemonPage";
import PokemonList from "./components/pokemon/PokemonList";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:pokemon" element={<PokemonPage />} />
      </Routes>
    </div>
  );
};

export default App;
