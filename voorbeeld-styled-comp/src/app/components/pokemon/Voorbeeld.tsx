import React, { useEffect, useState } from "react";

interface Props {
  voornaam: string;
  achternaam: string;
  leeftijd: number;
  volgendePagina: () => void;
}

const Voorbeeld: React.FC<Props> = ({
  voornaam,
  achternaam,
  leeftijd,
  volgendePagina,
}) => {
  const [getal, setGetal] = useState<number | string>(18);

  console.log(getal, setGetal);

  useEffect(() => {
    setGetal("hoi");
  }, []);

  return (
    <div>
      <h1>{voornaam}</h1>
      <h1>{achternaam}</h1>
      <h1>{leeftijd}</h1>
      <button onClick={volgendePagina}>Volgende pagina uit VOORBEELD</button>
    </div>
  );
};

export default Voorbeeld;
