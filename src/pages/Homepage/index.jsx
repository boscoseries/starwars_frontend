import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useImage from "../../hooks/useImage";
import swapi from "swapi-node";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { CardType1, CardType2 } from "../../components/Card";
import Button from "../../components/Button";
import Title from "../../components/Title";
import "./styles.css";

const folder = require.context("../../assets", false, /\.(png|jpe?g|svg)$/);
const images = useImage(folder);

const corsPass = "https://cors-anywhere.herokuapp.com/";

export default function() {
  const [ships, setShips] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [people, setPeople] = useState([]);
  const [shipLoading, setShipLoading] = useState(true);
  const [planetLoading, setPlanetLoading] = useState(true);
  const [peopleLoading, setPeopleLoading] = useState(true);

  const fetchStarships = async () => {
    const result = await swapi.get(`${corsPass}https://swapi.co/api/starships`);
    setShips(result);
    setShipLoading(false);
  };
  const fetchPlanets = async () => {
    const result = await swapi.get(`${corsPass}https://swapi.co/api/planets`);
    setPlanets(result);
    setPlanetLoading(false);
  };
  const fetchPeople = async () => {
    const result = await swapi.get(`${corsPass}https://swapi.co/api/people`);
    setPeople(result);
    setPeopleLoading(false);
  };

  let starshipImages = [];
  let planetImages = [];
  let characterImages = [];
  for (let [key, value] of Object.entries(images)) {
    if (key.match(/character/)) {
      characterImages.push(value);
    }
    if (key.match(/starship/)) {
      starshipImages.push(value);
    }
    if (key.match(/planet/)) {
      planetImages.push(value);
    }
  }

  useEffect(() => {
    fetchStarships();
    fetchPlanets();
    fetchPeople();
  }, []);

  return (
    <React.Fragment>
      <Title containerClass="mt-5 pt-2 mb-5 pb-2" titleClass="title" title="Popular Starships" lineClass="hr" />
      <div className="d-flex row flex-wrap" style={{ justifyContent: "center" }}>
        {!shipLoading &&
          ships.results.map((result, index) => {
            const { name, model, cargo_capacity } = result;
            if (index <= 5) {
              return (
                <CardType2
                  key={index}
                  imageSrc={starshipImages[index]}
                  imageClass="card-img-top"
                  altText="flower"
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
            }
          })}
      </div>
      <NavLink to="/starhip">
        <div className="d-flex justify-content-center">
          <Button
            buttonType="button"
            buttonClass="btn btn-primary btn-lg btn-block font-weight-lighter border-dark text-dark"
            buttonTag="View More"
            buttonStyles={{ fontSize: "18px", padding: "15px 30px", background: "#FFFFFF", width: "40%" }}
          />
        </div>
      </NavLink>
      <Title containerClass="mt-5 pt-2 mb-5 pb-2" titleClass="title" title="Popular Planets" lineClass="hr" />
      <div className="d-flex row flex-wrap" style={{ justifyContent: "center" }}>
        {!planetLoading &&
          planets.results.map((result, index) => {
            const { name, climate, population } = result;
            if (index <= 2) {
              return (
                <CardType2
                  key={index}
                  imageSrc={planetImages[index]}
                  imageClass="card-img"
                  imageHeight="430px"
                  altText="flower"
                  cardWidth={{ width: "360px" }}
                  cardClass="card-img-overlay"
                  cardBodyClass="d-flex flex-column justify-content-end"
                  cardBodyStyle={{ height: "400px" }}
                  cardTitle={name}
                  cardTitleClass="card-title d-flex justify-content-start text-white"
                  cardText={`Climate: ${climate}`}
                  cardText2={`Population: ${population}`}
                  cardTextClass="card-text text-white"
                />
              );
            }
          })}
      </div>
      <Title containerClass="mt-5 pt-2 mb-5 pb-2" titleClass="title" title="Popular People" lineClass="hr" />
      <div className="d-flex row flex-wrap" style={{ justifyContent: "center" }}>
        {!peopleLoading &&
          people.results.map((result, index) => {
            const { name, birth_year, gender } = result;
            if (index <= 3) {
              return (
                <CardType1
                  key={index}
                  imageSrc={characterImages[index]}
                  altText="people"
                  cardTitle={name}
                  cardText={`Birth Year: ${birth_year}`}
                  cardText2={`Gender: ${gender}`}
                  cardTextClass="card-text"
                />
              );
            }
          })}
      </div>
      <NavLink to="/people">
        <div className="d-flex justify-content-center pt-2 mt-5 mb-5 pb-2">
          <Button
            buttonType="button"
            buttonClass="btn btn-primary btn-lg btn-block font-weight-lighter border-dark text-dark"
            buttonTag="View More"
            buttonStyles={{ fontSize: "18px", padding: "15px 30px", background: "#FFFFFF", width: "40%" }}
          />
        </div>
      </NavLink>
    </React.Fragment>
  );
}
