import React from 'react';
import ProfilBtn from './ProfilBtn';
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
          <div className="container-fluid" style={{ width: '30% ' }}>
            <a className="navbar-brand" href="/">
              <ProfilBtn/>
            </a>
          </div>

          <div style={{ width: '80%', margin: '10px 0 0' }}>
            <Searchbar />
          </div>
          <img
            className="col-3"
            src="../assets/profile-icon-png-917.png"
            alt="profile"
            style={{ width: '5rem', margin: '0 10px 0 0 ' }}
          />
        </div>
      </nav>
    </div>
  );
};
export default ToolsBar;
