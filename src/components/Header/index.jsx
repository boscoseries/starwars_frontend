import React from "react";

import { CardType2 } from "../Card";
import "./styles.css";

import logo from "../../images/hero-banner.jpg";
import starWars from "../../images/swarslogo.png";
import starWarsdirectory from "../../images/swarsdirectory.png";

export default function Header () {
  return (
    <div>
      <CardType2
        imageSrc={logo}
        imageClass="card-img"
        cardClass="card-img-overlay"
        cardTitle={<img src={starWars} alt="star-wars-logo" width="130px" />}
        cardTitleClass="card_title"
        cardText={
          <div className="d-flex-column justify-content-center align-items-center">
            <p className="d-flex justify-content-center">
              <img src={starWarsdirectory} alt="star-wars-logo" width="320px" />
            </p>
            <div className="header_text">
              Find your favourite Characters, Films, Species, <br />
              <span> Starships and Planets </span>
            </div>
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
