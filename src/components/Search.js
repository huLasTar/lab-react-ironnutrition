import React from 'react';
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5:
function Search(props) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={() => {}} />
    </>
  );
}

export default Search;
