import React from 'react';

const Searchbar = () => {
  return (
    <div >
      <form className="d-flex">
        <input
          className="form-control me-"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        {/* <button className="btn btn-outline-success" type="submit">
          Search
        </button> */}
      </form>
    </div>
  );
};

export default Searchbar;
