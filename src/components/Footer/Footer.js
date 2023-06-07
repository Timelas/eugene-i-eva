import React from "react";
import namesFooter from "../../images/namesFooter.svg";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <p className="footer__text">До скорой встречи,</p>
      <img src={namesFooter} alt="Евгений и Ева" className="footer__names"></ img>
    </section>
  );
}

export default Footer;