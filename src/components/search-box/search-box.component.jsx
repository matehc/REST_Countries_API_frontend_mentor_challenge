import React from 'react'

import SearchInput from '../search-input/search-input.component';
import Region from '../region/region.component';

import './search-box.styles.scss';

function SearchBox({onChangeHandler}) {
  return (
    <div className='search-container'>
      <SearchInput onChangeHandler={onChangeHandler}/>
      <Region />
    </div>
  )
}

export default SearchBox;