import React from "react";

import './card.styles.scss';

function Card({country}) {
  return (
    <div className="country">
      <img className="country-img" src={country.flags.svg} alt="" />
      <div className="country-detail">
        <h2 className="country-name">{country.name.common}</h2>
        <p className="country-population">
          <span className="info-label">Population:</span>
          <span className="info">{country.population}</span>
        </p>
        <p className="country-region">
          <span className="info-label">Region:</span>
          <span className="info">{country.region}</span>
        </p>
        <p className="country-capital">
          <span className="info-label">Capital:</span>
          <span className="info">{country.capital}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
