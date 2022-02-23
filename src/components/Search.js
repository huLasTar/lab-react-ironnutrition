import React from 'react';
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5:
function Search(props) {
  const handleSearchInput = (e) => {
    e.preventDefault();
    props.handleSearch(e.target.value.toLowerCase());
  };

  return (
    <form>
      <Divider>Search Food</Divider>
      <Input type="text" name="searchInput" onChange={handleSearchInput} />
    </form>
  );
}

export default Search;
