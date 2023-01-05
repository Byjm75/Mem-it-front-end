import React, { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
// import ProfilBtn from './ProfilBtn';
import Searchbar from './Searchbar';

export const ToolsBar = () => {
  const navigate = useNavigate();

  const profilElement = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate('../profil');
  };
  return (
    <div>
      <nav
        className="navbar  ticky-top navbar-expand-"
        style={{ backgroundColor: 'black', width: '100%' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            className="container-fluid"
            style={{ width: '27% ', paddingLeft: '7px', margin: '0 auto 0 0' }}
          >
            <a className="navbar-brand" href="/dashboard">
              <img
                src="/assets/logo.png"
                alt="Mem-It"
                style={{ width: '4.5rem ' }}
              />
            </a>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent:'space-around'
            }}
          >
            <div
              style={{
                width: '73%',
                margin: '20px 0 0 0',
              }}
            >
              <Searchbar />
            </div>
            <div >
              <img
                className="col-3"
                src="../assets/profile-icon-png-917.png"
                alt="profile"
                style={{ width: '5.2rem', margin: '5px 0 0 ' }}
                onClick={profilElement}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default ToolsBar;
