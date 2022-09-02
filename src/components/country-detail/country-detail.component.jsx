import React from "react";
import { Outlet } from "react-router-dom";

const CountryDetail = () => {
  return (
    <>
<div className="country-detail-container">
      <img src="country-flag" alt="" />
      <div className="country-information">
        <h2 className="country-name">Germany</h2>
        <p className="country-population">
          <span className="info-label">Population:</span>
          <span className="info">81,770,900</span>
        </p>
        <p className="country-region">
          <span className="info-label">Region:</span>
          <span className="info">Europe</span>
        </p>

        <p className="country-sub-region">
          <span className="info-label">Sub Region:</span>
          <span className="info">Europe</span>
        </p>

        <p className="country-capital">
          <span className="info-label">Capital:</span>
          <span className="info">Berlin</span>
        </p>
      </div>

      <div className="country-more-info">
        <p className="country-tld">
          <span className="info-label">Top Level Domain:</span>
          <span className="info">.be</span>
        </p>

        <p className="country-currency">
          <span className="info-label">Currencies:</span>
          <span className="info">Euro</span>
        </p>

        <p className="country-language">
          <span className="info-label">Languages:</span>
          <span className="info">Dutch, French, German</span>
        </p>
      </div>

      <div className="border-countries">
        <h3 className="bc-label">Border Countries:</h3>
      </div>
    </div>
    </>
  );
};

export default CountryDetail;
