import React from "react";

export const CardType = ({ imageSrc, altText, cardTitle, cardText, smallText }) => {
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

export default CardType;
