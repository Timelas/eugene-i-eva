import React from "react";
import dresscode from "../../images/dressCode.svg";
import "./Dresscode.css";

function Dresscode() {
  return (
    <section className="dresscode" id="dresscode">
      <img src={dresscode} alt="заголовок" className="dresscode__header"></ img>
      <p className="dresscode__description">Для нас главное - ваше присутствие. Но нам будет очень приятно, если вы учтете наши пожелания при выборе нарядов:
        <br />Вечерние платья пастельных оттенков для дам, смокинг/костюм для мужчин.</p>
      <div className="dresscode__line"></div>
    </section>
  );
}

export default Dresscode;