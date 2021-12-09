import React from "react";
import CardProd from "./CardPro";

const primaCard = {
  nome:"Prima",
  prezzo:25,
  link:"https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f12079.jpg"
}
const secondaCard = {
  nome:"Seconda",
  prezzo:26,
  link:"https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f12127.jpg"
}
const terzoCard = {
  nome:"Terzo",
  prezzo:27,
  link:"https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f12099.jpg"
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
