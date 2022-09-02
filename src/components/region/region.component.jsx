import React from "react";

import './region.styles.scss';

const Region = () => {
  return (
    <div className="select-container">
      <div className="option-container active">
        <div className="option">
          <input type="radio" className="region-radio" id="africa" name="region" />
          <label htmlFor="africa">Africa</label>
        </div>

        <div className="option">
          <input type="radio" className="region-radio" id="america" name="region" />
          <label htmlFor="america">America</label>
        </div>

        <div className="option">
          <input type="radio" className="region-radio" id="asia" name="region" />
          <label htmlFor="asia">Asia</label>
        </div>

        <div className="option">
          <input type="radio" className="region-radio" id="europe" name="region" />
          <label htmlFor="europe">Europe</label>
        </div>

        <div className="option">
          <input type="radio" className="region-radio" id="oceania" name="region" />
          <label htmlFor="oceania">Oceania</label>
        </div>
      </div>
      <div className="selected-box">
        <div className="selected">Filter by Region</div>
        <i className="fa-solid fa-angle-down arrow-icon"></i>
      </div>
    </div>
  );
};

export default Region;
