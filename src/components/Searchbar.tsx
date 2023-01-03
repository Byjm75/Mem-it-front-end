import React from 'react';

const Searchbar = () => {
  return (
    <div>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          
        />
      </form>
    </div>
  );
};

export default Searchbar;
