import React, { useState, useEffect } from "react";
import useImage from "../hooks/useImage";
import swapi from "swapi-node";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { CardType2 } from "../components/Card";
import Title from "../components/Title";

const folder = require.context("../assets", false, /\.(png|jpe?g|svg)$/);
const images = useImage(folder);

const corsPass = "https://cors-anywhere.herokuapp.com/";

export default function Starships() {
  const [ships, setShips] = useState([]);
  const [shipLoading, setShipLoading] = useState(true);

  const fetchStarships = async () => {
    const result = await swapi.get(`${corsPass}https://swapi.co/api/starships`);
    setShips(result);
    setShipLoading(false);
  };

  let starshipImages = [];
  for (let [key, value] of Object.entries(images)) {
    if (key.match(/starship/)) {
      starshipImages.push(value);
    }
  }

  console.log(ships);

  useEffect(() => {
    fetchStarships();
  }, []);

  return (
    <div>
      <Title containerClass="mt-5 pt-2 mb-5 pb-2" titleClass="title" title="Popular Starships" lineClass="hr" />
      <div className="d-flex row flex-wrap" style={{ justifyContent: "center" }}>
        {!shipLoading &&
          ships.results.map((result, index) => {
            const { name, model, cargo_capacity } = result;
              return (
                <CardType2
                  key={index}
                  imageSrc={starshipImages[index]}
                  imageClass="card-img-top"
                  altText="image"
                  cardWidth={{ width: "360px" }}
                  cardClass="card-body"
                  cardTitleClass="card-title d-flex justify-content-center"
                  cardTextClass="card-text"
                  cardTitle={name}
                  cardText={`Model: ${model}`}
                  cardText2={`Cargo Capacity: ${cargo_capacity}`}
                  buttonType="button"
                  buttonFlexStyle="d-flex justify-content-end"
                  buttonTag="Read More"
                  buttonClass="btn btn-secondary btn-lg font-weight-lighter rounded-0 btn-light"
                  buttonStyles={{ fontSize: "13px", padding: "12px 30px", background: "#D8D8D8" }}
                  buttonIcon={<FontAwesomeIcon icon={faArrowRight} />}
                />
              );
          })}
      </div>
    </div>
  );
}
