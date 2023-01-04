import React from 'react';

const Searchbar = () => {
  return (
    <div>
    <div>
      <form className="d-flex">
        <input
          className="form-control me-"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ borderColor: ' lightslategrey' }}
        />
      </form>
    </div>
  );
};

export default Searchbar;
