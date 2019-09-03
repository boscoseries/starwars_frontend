import React, { useState, useEffect } from "react";
import swapi from "swapi-node";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { CardType1, CardType2 } from "../../components/Card";
import Button from "../../components/Button";
import image from "../../images/rose.jpeg";
import "./styles.css";

const corsPass = "https://cors-anywhere.herokuapp.com/";

export default function() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    // make request to swapi api
    const result = await swapi.get(`${corsPass}https://swapi.co/api/starships`);
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    // call fetchData function on DOM render
    fetchData();
  }, []);

  console.log(data)

  return (
    <React.Fragment>
      <div className="mt-5 pt-2 mb-5 pb-2">
        <p className="title">Popular Starships</p>
        <hr className="hr" />
      </div>
      <div className="d-flex row flex-wrap" style={{ justifyContent: "center" }}>
        {!loading &&
          data.results.map((result, index) => {
            const { name, model, cargo_capacity } = result;
            if (index <= 5) {
            return (
              // <div key={index} className="col-4" style={{ margin: "3px", padding: "0px", width: "358px", background: "yellow" }}>
              <CardType2
                key={index}
                imageSrc={image}
                imageClass="card-img-top"
                altText="flower"
                cardWidth={{ width: "360px" }}
                cardClass="card-body"
                cardTitleClass="card-title d-flex justify-content-center"
                cardTextClass="card-text"
                cardTitle={name}
                cardText={`Model: ${ model }`}
                cardText2={`Cargo Capacity: ${ cargo_capacity}`}
                buttonType="button"
                buttonFlexStyle="d-flex justify-content-end"
                buttonTag="Read More"
                buttonClass="btn btn-secondary btn-lg font-weight-lighter rounded-0 btn-light"
                buttonStyles={{ fontSize: "13px", padding: "12px 30px", background: "#D8D8D8" }}
                buttonIcon={<FontAwesomeIcon icon={faArrowRight} />}
              />
              // </div>
            );
          }
          })}
      </div>
      <>
        <div className="d-flex justify-content-center">
          <Button
            buttonType="button"
            buttonClass="btn btn-primary btn-lg btn-block font-weight-lighter border-dark text-dark"
            buttonTag="View More"
            buttonStyles={{ fontSize: "18px", padding: "15px 30px", background: "#FFFFFF", width: "40%" }}
          />
        </div>
        <br />
        <CardType2
          imageSrc={image}
          imageClass="card-img"
          imageHeight="430px"
          altText="flower"
          cardWidth={{ width: "360px" }}
          cardClass="card-img-overlay"
          cardTitleClass="card-title"
          cardFooter="New Card"
        />
        <CardType1
          imageSrc={image}
          altText="flower"
          cardTitle="New Card"
          cardText="This is the containing text"
          smallText="This is the containing text"
        />
      </>
    </React.Fragment>
  );
}
