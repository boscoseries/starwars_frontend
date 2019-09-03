import React, { useState, useEffect } from "react";
import useImage from "../hooks/useImage";
import swapi from "swapi-node";

import { CardType1 } from "../components/Card";
import Title from "../components/Title";

const folder = require.context("../assets", false, /\.(png|jpe?g|svg)$/);
const images = useImage(folder);

const corsPass = "https://cors-anywhere.herokuapp.com/";

export default function People() {
  const [people, setPeople] = useState([]);
  const [peopleLoading, setPeopleLoading] = useState(true);

  const fetchStarships = async () => {
    const result = await swapi.get(`${corsPass}https://swapi.co/api/starships`);
    setPeople(result);
    setPeopleLoading(false);
  };

  let characterImages = [];
  for (let [key, value] of Object.entries(images)) {
    if (key.match(/character/)) {
      characterImages.push(value);
    }
  }

  console.log(people);

  useEffect(() => {
    fetchStarships();
  }, []);

  return (
    <>
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
    </>
  );
}
