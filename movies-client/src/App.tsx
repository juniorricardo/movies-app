import "./App.css";
import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function App() {
  const most = (n: number) => (n * (n + 1)) / 2;

  return (
    <React.Fragment>
      <h1>Holaaa</h1>
      <p>
        The most number of {most(10)} is {most(10)}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        minus itaque saepe nesciunt at quibusdam alias modi sint eveniet
        repellat doloremque, eligendi consectetur accusamus ipsa? Possimus
        maiores unde neque reiciendis!
      </p>
      <Button colorScheme="blue">Button</Button>
    </React.Fragment>
  );
}

export default App;
