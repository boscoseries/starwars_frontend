import React from "react";

export const CardType1 = ({ imageSrc, altText, cardTitle, cardText, smallText }) => {
  return (
    <div className="card mb-3" style={{ width: "620px" }}>
      <div className="row no-gutters">
        <div className="col-md-8">
          <img src={imageSrc} height="380px" className="card-img" alt={altText} />
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
            <p className="card-text">{cardText}</p>
            <p className="card-text">
              <small className="text-muted">{smallText}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const footerStyle = {
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  color: "white"
};

export const CardType2 = ({
  imageSrc,
  imageHeight,
  imageClass,
  altText,
  cardWidth,
  cardTitle,
  cardTitleClass,
  cardTextClass,
  cardText,
  cardFooter,
  smallText,
  cardClass
}) => {
  return (
    <div className="card mb-3" style={cardWidth}>
      <img src={imageSrc} height={cardClass === "card-body" ? "250px" : imageHeight} className={imageClass} alt={altText} />
      <div className={cardClass} style={{ height: "200px" }}>
        <h5 className={cardTitleClass}>{cardTitle}</h5>
        <p className={cardTextClass}>{cardText}</p>
        <p className="card-text">
          <small className="text-muted">{smallText}</small>
        </p>
        <div style={footerStyle}>
          <h5>{cardFooter}</h5>
        </div>
      </div>
    </div>
  );
};
