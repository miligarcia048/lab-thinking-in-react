import React, { useState } from 'react';

function SearchBar(props) {
  const [keyword, setKeyword] = useState('');

  function handleKeywordInput(event) {
    setKeyword(event.target.value);
    props.handleSearch(event.target.value);
  }

  return (
    <>
      <label htmlFor="filter">Search</label>
      <input
        onChange={handleKeywordInput}
        type="text"
        id="filter"
        value={keyword}
      ></input>
    </>
  );
}

export default SearchBar;
