import React from "react";

import './region.styles.scss';

const Region = () => {
  return (
    <div className="select-container">
      <div className="option-container active">
        <div className="option">
          <input type="radio" className="region-radio" id="africa" name="region" />
          <label for="africa">Africa</label>
        </div>

        <div className="option">
          <input type="radio" className="region-radio" id="america" name="region" />
          <label for="america">America</label>
        </div>

        <div className="option">
          <input type="radio" className="region-radio" id="asia" name="region" />
          <label for="asia">Asia</label>
        </div>

        <div className="option">
          <input type="radio" className="region-radio" id="europe" name="region" />
          <label for="europe">Europe</label>
        </div>

        <div className="option">
          <input type="radio" className="region-radio" id="oceania" name="region" />
          <label for="oceania">Oceania</label>
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
