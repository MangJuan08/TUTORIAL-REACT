import React from "react";

const link =
  "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f12079.jpg";
const CardProd = (props) => {
  console.log(props);
  const {nome, prezzo} = props; //decostruzione dell'Oggetto
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
