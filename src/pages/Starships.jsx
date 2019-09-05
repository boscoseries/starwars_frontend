import React, { useState, useEffect } from "react";
import useImage from "../hooks/useImage";
import swapi from "swapi-node";

import ButtonGroup from "../components/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { CardType2 } from "../components/Card";
import Title from "../components/Title";

// create an object from all images in the asset folder
const folder = require.context("../assets", false, /\.(png|jpe?g|svg)$/);
const images = useImage(folder);

// skip CORS errors on client side
const corsPass = "https://cors-anywhere.herokuapp.com/";

export default function Starships() {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);
  let [pageA, setPageA] = useState(1);
  let [pageB, setPageB] = useState(0);

  // function to fetch starships from SWAPI
  const fetchStarships = async () => {
    const result = await swapi.get(`${corsPass}https://swapi.co/api/starships/?page=${pageA}`);
    if (result) {
    setShips(result);
      const maxListing = (pageA - 1) * 10 + result.results.length;
      let valueB = maxListing > ships.count ? ships.count : maxListing;
      setPageB(valueB);
      setLoading(false);
    }
  };

  // separate starship images from assets
  let starshipImages = [];
  for (let [key, value] of Object.entries(images)) {
    if (key.match(/starship/)) {
      starshipImages.push(value);
    }
  }

  // function runs onclick of next bubbon
  const nextPage = e => {
    e.preventDefault();
    if (!loading) {
      const maxPage = Math.ceil(ships.count / 10);
      let valueA = pageA >= maxPage ? maxPage : pageA += 1;
      setPageA(valueA);
      const maxListing = (pageA - 1) * 10 + ships.results.length;
      let valueB = maxListing > ships.count ? ships.count : maxListing;
      setPageB(valueB);
    }
  };

  // function runs onclick of previous bubbon
  const prevPage = e => {
    // !loading && maxListing > ships.count ? ships.count : maxListing
    // e.preventDefault();
    // if (!loading) {
    //   setPageA(pageB--);
    // }
  };

  // fires content on event change
  useEffect(() => {
    fetchStarships();
  }, [pageA]);

  return (
    <React.Fragment>
      {!loading ? (
        <>
          <Title containerClass="mt-5 pt-2 mb-5 pb-2" titleClass="title" title="Popular Starships" lineClass="hr" />
          <div className="d-flex row flex-wrap" style={{ justifyContent: "center" }}>
            {ships.results.map((result, index) => {
              const num = Math.floor(Math.random() * Math.floor(6));
              const { name, model, cargo_capacity } = result;
              return (
                <CardType2
                  key={index}
                  imageSrc={starshipImages[num]}
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
          <div className="d-flex justify-content-center mt-5 pt-2 mb-5 pb-2">
            <ButtonGroup clickPrev={prevPage} clickNext={nextPage} pageA={pageA} pageB={pageB}
            pageTotal={ships.count}
            />
          </div>
        </>
      ) : null}
    </React.Fragment>
  );
}
