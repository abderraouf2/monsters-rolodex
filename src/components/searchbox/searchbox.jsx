import React from 'react';
import './searchbox.css';

const searchbox = ({placeholder, searchChange}) => {
  return (
    
      <input 
            className="search"
            type="search" 
            placeholder={placeholder}
            onChange={searchChange}
        />
    
  );
};

export default searchbox;