import React from 'react';

import Card from '../card/card.component';

import './card-list.styles.scss';

const CardList = ( {countries} ) => {
  // console.log(countries, 'from cardlist');
  return (
    <div className="card-list">
    {countries.map( country => {
      {/* console.log(country); */}
        return (
            <Card key={country.name.common} country={country} />                
        )
    })}
    </div>
  )
}

export default CardList;