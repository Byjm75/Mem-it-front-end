import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar sticky-top navbar-expand-lg"
        style={{ backgroundColor: 'black', width: '100%' }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="/assets/logo.png"
              alt="Mem-It"
              style={{ width: '4.5rem ' }}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: '#806d42' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/signin"
                  className="nav-link active"
                  style={{
                    color: '#806d42',
                    fontSize: '24px',
                    marginLeft: '30px',
                    fontWeight: 'bold',
                  }}
                >
                  Connexion
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/signup"
                  className="nav-link active"
                  style={{
                    color: '#806d42',
                    fontSize: '24px',
                    marginLeft: '30px',
                    fontWeight: 'bold',
                  }}
                >
                  Inscription
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
