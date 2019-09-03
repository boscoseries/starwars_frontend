import React from "react";
import Button from "./Button";

export const CardType1 = ({ imageSrc, altText, cardTitle, cardText, cardText2, smallText, cardTextClass }) => {
  return (
    <div className="card mb-3" style={{ width: "620px" }}>
      <div className="row no-gutters">
        <div className="col-md-8">
          <img src={imageSrc} height="380px" className="card-img" alt={altText} />
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
            <div className={cardTextClass}>{cardText}</div>
            <div className={cardTextClass}>{cardText2}</div>
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
  cardBodyClass,
  cardBodyStyle,
  cardTitle,
  cardTitleClass,
  cardTextClass,
  cardText,
  cardText2,
  cardFooter,
  smallText,
  smallText2,
  cardClass,
  buttonType,
  buttonClass,
  buttonStyles,
  buttonTag,
  buttonFlexStyle,
  buttonIcon
}) => {
  return (
    <div className="card mb-5 mr-5" style={cardWidth}>
      <img src={imageSrc} height={cardClass === "card-body" ? "250px" : imageHeight} className={imageClass} alt={altText} />
      <div className={cardClass} style={{ height: "200px" }}>
        <div className={cardBodyClass} style={cardBodyStyle}>
          <h5 className={cardTitleClass}>{cardTitle}</h5>
          <div className={cardTextClass}>{cardText}</div>
          <div className={cardTextClass}>{cardText2}</div>
          <p className="card-text">
            <small className="text-muted">{smallText}</small>
            <small className="text-muted">{smallText2}</small>
          </p>
        </div>
        <div style={footerStyle}>
          <h5>{cardFooter}</h5>
        </div>
        {buttonType ? (
          <div className={buttonFlexStyle}>
            <Button buttonClass={buttonClass} buttonTag={buttonTag} buttonType={buttonType} buttonIcon={buttonIcon} buttonStyles={buttonStyles} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
