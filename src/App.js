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

      <CardProd {...primaCard}></CardProd>{/*decostruzione dell'Oggetto*/}
      <CardProd {...secondaCard}></CardProd>
      <CardProd {...terzoCard}></CardProd>
    </React.Fragment>
  );
}

export default App;
