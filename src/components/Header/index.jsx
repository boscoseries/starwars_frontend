import React from "react";

import { CardType2 } from "../Card";
import "./styles.css";

import logo from "../../images/hero-banner.jpg";

export default function Header () {
  return (
    <div>
      <CardType2
        imageSrc={logo}
        imageClass="card-img"
        cardClass="card-img-overlay"
        cardTitleClass="card_title"
        cardText={
          <div className="d-flex-column justify-content-center align-items-center">
            <p className="d-flex justify-content-center">
            </p>
          </div>
        }
        cardTextClass="card_text"
        altText="hero-banner"
        cardWidth={{ width: "100%" }}
        imageHeight="660px"
      />
    </div>
  );
}
