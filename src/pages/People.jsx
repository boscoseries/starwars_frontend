import React, { useState, useEffect } from "react";
import useImage from "../hooks/useImage";
import swapi from "swapi-node";

import ButtonGroup from "../components/ButtonGroup";
import { CardType1 } from "../components/Card";
import Title from "../components/Title";

// create an object from all images in the asset folder
const folder = require.context("../assets", false, /\.(png|jpe?g|svg)$/);
const images = useImage(folder);

// skip CORS errors on client side
const corsPass = "https://cors-anywhere.herokuapp.com/";

export default function Starships () {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  let [pageA, setPageA] = useState(1);
  let [pageB, setPageB] = useState(0);

  // function to fetch starships from SWAPI
  const fetchStarships = async () => {
    const result = await swapi.get(`${ corsPass }https://swapi.co/api/people/?page=${ pageA }`);
    if (result) {
      setPeople(result);
      const maxListing = (pageA - 1) * 10 + result.results.length;
      let valueB = maxListing > people.count ? people.count : maxListing;
      setPageB(valueB);
      setLoading(false);
    }
  };

  // separate starship images from assets
  let characterImages = [];
  for (let [key, value] of Object.entries(images)) {
    if (key.match(/character/)) {
      characterImages.push(value);
    }
  }

  // function runs onclick of next bubbon
  const nextPage = e => {
    e.preventDefault();
    if (!loading) {
      const maxPage = Math.ceil(people.count / 10);
      let valueA = pageA >= maxPage ? maxPage : pageA += 1;
      setPageA(valueA);
      const maxListing = (pageA - 1) * 10 + people.results.length;
      let valueB = maxListing > people.count ? people.count : maxListing;
      setPageB(valueB);
    }
  };

  // function runs onclick of previous bubbon
  const prevPage = e => {
    e.preventDefault();
    if (!loading) {
      let valueA = pageA <= 1 ? 1 : pageA -= 1;
      setPageA(valueA);
      const maxListing = (pageA - 1) * 10 + people.results.length;
      let valueB = maxListing > people.count ? people.count : maxListing;
      setPageB(valueB);
    }
  };

  // fires content on event change
  useEffect(() => {
    fetchStarships();
  }, [pageA]);

  return (
    <React.Fragment>
      {!loading ? (
        <>
          <Title containerClass="mt-5 pt-2 mb-5 pb-2" titleClass="title" title="Starwars Characters" lineClass="hr" />
          <div className="d-flex row flex-wrap justify-content-around">
            {!loading &&
              people.results.map((result, index) => {
                const num = Math.floor(Math.random() * Math.floor(4));
                const { name, birth_year, gender } = result;
                return (
                  <CardType1
                    key={index}
                    imageSrc={characterImages[num]}
                    altText="people"
                    cardTitle={name}
                    cardText={`Birth Year: ${birth_year}`}
                    cardText2={`Gender: ${gender}`}
                    cardTextClass="card-text"
                  />
                );
              })}
          </div>
          <div className="d-flex justify-content-center mt-5 pt-2 mb-5 pb-2">
            <ButtonGroup clickPrev={prevPage} clickNext={nextPage} pageA={pageA} pageB={pageB} pageTotal={people.count} />
          </div>
        </>
      ) : null}
    </React.Fragment>
  );
}
