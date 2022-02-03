import React from 'react';
import './Search.css';
import SearchComp from '../Components/SearchComp';

const SearchPage = () => {
  return (
      <>
      <h2 className='search_h2'>Here what we have got for you</h2>
        <SearchComp/>
        <SearchComp/>
        <SearchComp/>
        <SearchComp/>
      </>
  );
};

export default SearchPage;
