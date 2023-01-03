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
        <button
          className="btn btn-primary profile-button"
          type="submit"
          style={{ backgroundColor: '#007872', borderColor: '#007872' }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
