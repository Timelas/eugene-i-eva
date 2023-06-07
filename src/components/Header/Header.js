import React from "react";
import "./Header.css";
import { useOrientation } from 'react-use';
import date from "../../images/date.svg";
import foto from "../../images/eva-evgeniy.jpeg";
import namesH from "../../images/names.svg";
import namesV from "../../images/namesV.svg";

function Header() {
  const { type } = useOrientation();
  
  return (
    <section className="header" id="home">
      <div className="header__desctop">
        <div className="header__contain">
          <img src={date} alt="23.07.23" className="header__date header__width"></ img>
          <img src={foto} alt="фотография" className="header__foto"></ img>
        </div>
        {
          type === 'landscape-primary' ? (
            <img src={namesH} alt="Евгений и Ева" className="header__names header__width"></ img>
          ):(
            <img src={namesV} alt="Евгений и Ева" className="header__names header__width"></ img>
          )
        }
      </div>
    </section>
  );
}

export default Header;