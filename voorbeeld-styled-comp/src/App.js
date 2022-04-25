import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  background: ${(props) => (props.primary ? "palevioletred" : "purple")};
`;

const Button = styled.button`
  font-size: 1.5em;
  text-align: center;
  padding: 20px;
  color: white;
  background: violet;
  border-radius: 100%;
`;

const App = () => {
  const [primary, setPrimary] = useState(true);

  return (
    <div className="App">
      <Title primary={primary}>Hoi</Title>
      <Button onClick={() => setPrimary(!primary)}>Click</Button>
    </div>
  );
};

export default App;
