import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function ButtonGroup({ clickNext, clickPrev, pageA, pageB, pageTotal }) {
  return (
    <div className="btn-group" style={{ width: "15%" }} role="group" aria-label="Basic example">
      <div className="d-flex justify-content-center align-items-center text-black-50">
        {pageA} - {pageB} of {pageTotal}
      </div>
      <div className="d-flex">
        <button type="button" className="btn btn-light" id="pgbtn" onClick={clickPrev}>
          <FontAwesomeIcon style={{ fontSize: "1.3rem" }} icon={faAngleLeft} />
        </button>
        <button type="button" className="btn btn-light" id="pgbtn2" onClick={clickNext}>
          <FontAwesomeIcon style={{ fontSize: "1.3rem" }} icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}
