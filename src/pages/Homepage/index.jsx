import React from "react";
import { CardType1, CardType2 } from "../../components/Card";

import image from "../../images/rose.jpeg";

export default function () {
  return (
    <>
      <CardType1
        imageSrc={image}
        altText="flower"
        cardTitle="New Card"
        cardText="This is the containing text"
        smallText="This is the containing text"
      />
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
      />
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
    </>
  );
}
