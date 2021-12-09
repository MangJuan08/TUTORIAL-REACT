import React from "react";
import CardProd from "./CardPro";

const primaCard = {
  nome:"Prima",
  prezzo:25
}
const secondaCard = {
  nome:"Seconda",
  prezzo:26
}
const terzoCard = {
  nome:"Terzo",
  prezzo:27
}
function App() {
  return (
    <React.Fragment>
      <h2>ciaos</h2>

      <CardProd card={primaCard}></CardProd>
      <CardProd card={secondaCard}></CardProd>
      <CardProd card={terzoCard}></CardProd>
    </React.Fragment>
  );
}

export default App;
