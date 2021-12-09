import React from "react";


const CardProd = (props) => {
  console.log(props);
  const {nome, prezzo, link} = props; //decostruzione dell'Oggetto
  return (
    <article>
      <div className="card">
        <h4>{nome}</h4>
        <img src={link} alt=""></img>
      <p>{prezzo}</p>
      </div>
    </article>
  );
};

export default CardProd;
