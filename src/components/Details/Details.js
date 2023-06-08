import React from "react";
import details from "../../images/details.svg";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <img src={details} alt="детали" className="details__header"></ img>
      <p className="details__text">Обратите внимание, что формат мероприятия не предполагает детской площадки и аниматоров. Пожалуйста, позаботьтесь
о том, чтобы провести этот вечер без детей.</p>
      <div className="details__lineV"></div>
      <p className="details__text">Мы просим вас не дарить нам цветы. Ваши улыбки, прекрасное настроение и конверты с финансовыми презентами будут лучшим подарком для нас в этот день!</p>
      <div className="details__lineV"></div>
      <p className="details__text">На все вопросы, связанные с торжеством, с радостью ответит организатор нашей свадьбы Марина: 8-911-846-91-76</p>
      <div className="details__line"></div>
    </section>
  );
}

export default Details;