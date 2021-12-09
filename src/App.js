import React from "react";
import CardProd from "./CardPro";
import arrayDiOggetti from "./arrayDiOggetti";


function App() {
  return (
    <React.Fragment>
      <h2>ciaos</h2>
{
  arrayDiOggetti.map((item, index) => {
    return <CardProd key = {index} {...item}></CardProd>
  })
}
    
    </React.Fragment>
  );
}

export default App;
/*<CardProd {...primaCard}></CardProd>{/*decostruzione dell'Oggetto*
<CardProd {...secondaCard}></CardProd>
<CardProd {...terzoCard}></CardProd>*/