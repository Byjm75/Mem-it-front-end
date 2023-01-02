import React from 'react';
import Searchbar from './Searchbar';

export const ToolsBar = () => {
  return (
    <div>
      <nav
        className="navbar  ticky-top navbar-expand-"
        style={{ backgroundColor: '#9AAEB4', width: '100%' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div className="container-fluid" style={{ width: '100% ' }}>
            <a className="navbar-brand" href="/" >
              <img
                src="/assets/logo.png"
                alt="Mem-It"
                style={{ width: '4.5rem ' }}
              />
            </a>
          </div>

          <div style={{ width: '100%', margin: '10px 30px 0' }}>
            <Searchbar />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default ToolsBar;
