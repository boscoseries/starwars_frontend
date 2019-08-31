import React from "react";
import { CardType1, CardType2 } from "../../components/Card";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import image from "../../images/rose.jpeg";
import Button from "../../components/Button";

export default function() {
  return (
    <>
      <div className="mt-5 pt-2 mb-5 pb-2">
        <p className="title">Popular Starships</p>
        <hr className="hr" />
      </div>
      <div className="container" style={{ margin: "0px 100px" }}>
        <CardType2
          imageSrc={image}
          imageClass="card-img-top"
          altText="flower"
          cardWidth={{ width: "360px" }}
          cardClass="card-body"
          cardTitleClass="card-title"
          cardTextClass="card-text"
          cardTitle="New Card"
          cardText="This is the containing text"
          smallText="This is the containing text"
          buttonType="button"
          buttonFlexStyle="d-flex justify-content-end"
          buttonTag="Read More"
          buttonClass="btn btn-secondary btn-lg font-weight-lighter rounded-0 btn-light"
          buttonStyles={{ fontSize: "13px", padding: "12px 30px", background: "#D8D8D8" }}
          buttonIcon={faArrowRight}
        />
        <div className='d-flex justify-content-center'>
        <Button
          buttonType="button"
          buttonClass="btn btn-primary btn-lg btn-block font-weight-lighter border-dark text-dark"
          buttonTag="View More"
          buttonStyles={{ fontSize: "18px", padding: "15px 30px", background: "#FFFFFF", width: '40%' }}
          />
        </div>
        <br />
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
      </div>
    </>
  );
}
