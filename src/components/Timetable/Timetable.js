import React from "react";
import "./Timetable.css";
import rings from "../../images/rings.svg";
import glasses from "../../images/legsgo.svg";
import plate from "../../images/plate.svg";
import cake from "../../images/cake.svg";
import music from "../../images/music.svg";
import car from "../../images/car.svg";
import lineStart from "../../images/start.svg";
import lineEnd from "../../images/end.svg";
import lineCenter from "../../images/center.svg";
import timetable from "../../images/timetable.svg";

function Timetable() {
  return (
    <section className="timetable" id="plan">
      <div className="timetable__lines"></div>
      <img src={timetable} alt="заголовок" className="timetable__header"></ img>
      <div className="timetable__block">
        <img alt="rings" className="timetable__pic timetable__pic_visual_rings" src={rings}></img>
        <img alt="glasses" className="timetable__pic timetable__pic_visual_glasses" src={glasses}></img>
        <img alt="plate" className="timetable__pic timetable__pic_visual_plate" src={plate}></img>
        <img alt="cake" className="timetable__pic timetable__pic_visual_cake" src={cake}></img>
        <img alt="music" className="timetable__pic timetable__pic_visual_music" src={music}></img>
        <img alt="car" className="timetable__pic timetable__pic_visual_car" src={car}></img>
        <img className="timetable__line timetable__line_center_glasses" src={lineCenter} alt="линия"></img>
        <img className="timetable__line timetable__line_center_plate" src={lineCenter} alt="линия"></img>
        <img className="timetable__line timetable__line_center_cake" src={lineCenter} alt="линия"></img>
        <img className="timetable__line timetable__line_center_music" src={lineCenter} alt="линия"></img>
        <img className="timetable__line-start" src={lineStart} alt="линия"></img>
        <img className="timetable__line-end" src={lineEnd} alt="линия"></img>
        <p className="timetable__text timetable__text_about_rings">Сбор гостей<br />15.30</p>
        <p className="timetable__text timetable__text_about_glasses">Церемония бракосочетания<br />16.00</p>
        <p className="timetable__text timetable__text_about_plate">Праздничный банкет <br /> 17.00</p>
        <p className="timetable__text timetable__text_about_cake">Свадебный торт <br /> 21.30</p>
        <p className="timetable__text timetable__text_about_music">Танцы <br /> 22.00</p>
        <p className="timetable__text timetable__text_about_car">Завершение вечера 0.00</p>
      </div>
      <div className="timetable__lines"></div>
    </section>
  );
}

export default Timetable;