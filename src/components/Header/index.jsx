import React from "react";

import { CardType2 } from "../Card";
import "./styles.css";

import logo from "../../images/hero-banner.jpg";
import starWarsFont from "../../images/swarslogo.png";
import starWarDirectory from "../../images/swarsdirectory.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "../Input";

export default function Header() {
  return (
    <div>
      <CardType2
        imageSrc={logo}
        imageClass="card-img"
        cardClass="card-img-overlay"
        cardTitle={<img src={starWarsFont} alt="star-wars-logo" width="130px" />}
        cardTitleClass="card_title"
        cardText={
          <div style={{ width: "50%" }}>
            <div className="d-flex-column justify-content-center align-items-center">
              <p className="d-flex justify-content-center">
                <img src={starWarDirectory} alt="star-wars-logo" width="320px" />
              </p>
              <div className="header_text">
                Find your favourite Characters, Films, Species, <br />
                <span> Starships and Planets </span>
              </div>
            </div>
            <div className="col-12 pt-4">
              <Input
                inputClass="form-control form-control-lg form-control-borderless"
                inputType="search"
                inputPlaceholder="Enter a search term"
                symbol={<FontAwesomeIcon icon={faSearch} />}
              />
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
