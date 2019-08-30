import React from "react";
import CardType from "../../components/Card";

import image from "../../images/rose.jpeg";

export default function() {
  return (
    <>
      <CardType
        imageSrc={image}
        altText="flower"
        cardTitle="New Card"
        cardText="This is the containing text"
        smallText="This is the containing text"
      />
    </>
  );
}
