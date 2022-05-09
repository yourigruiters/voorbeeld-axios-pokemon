import React from "react";

interface Props {
  voornaam: string;
  achternaam: string;
  leeftijd: number;
}

const Voorbeeld: React.FC<Props> = ({ voornaam, achternaam, leeftijd }) => {
  return (
    <div>
      <h1>{voornaam}</h1>
      <h1>{achternaam}</h1>
      <h1>{leeftijd}</h1>
    </div>
  );
};

export default Voorbeeld;
