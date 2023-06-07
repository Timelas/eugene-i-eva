import React from "react";
import dear from "../../images/dear.svg";
import wedding from "../../images/weddingday.svg";
import "./InfoDate.css";

function InfoDate() {
  return (
    <section className="info-date" id="place">
      <div className="info-date__line"></div>
      <div className="info-date__invitation">
        <img className="info-date__who" alt="Дорогие друзья" src={dear}></img>
        <p className="info-date__text">Приглашаем Вас на торжество, посвященное нашему бракосочетанию.
          Мы&#8239;будем рады, если Вы проведете этот счастливый день с нами.</p>
        <p className="info-date__text">ВОСКРЕСЕНЬЕ<br />23 ИЮЛЯ 2023</p>
        <img className="info-date__wedding" alt="свадебный день" src={wedding}></img>
        <p className="info-date__text">СБОР ГОСТЕЙ В 15:30</p>
        <p className="info-date__text">Ресторан Летний Дворец
          <br />Санкт-Петербургское шоссе 130к7
          <br />16:00</p>
      </div>
      <div className="info-date__line"></div>
    </section>
  );
}

export default InfoDate;