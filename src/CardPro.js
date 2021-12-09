import React from "react";


const CardProd = (props) => {
  console.log(props);
  const {nome, prezzo, link, id} = props; //decostruzione dell'Oggetto
  const viewPrezzo = (prezzo) => {
    alert(prezzo);
  }

  const eventHandler = (prezzo) => (e) => {
    console.log(e.target.innerText);//stampa il testo
    console.log(prezzo)
  }
  return (
    <article>
      <div className="card">
        <h4>{nome}</h4>
        <p>{id}</p>
        <img src={link} alt=""></img>
      <button onClick={() => viewPrezzo(prezzo)}>{prezzo}</button>
      <button onClick={eventHandler(prezzo)}>event handler prezzo</button>
      </div>
    </article>
  );
};

export default CardProd;
