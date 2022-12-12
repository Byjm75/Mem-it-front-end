import React from "react";
import { NavLink } from "react-router-dom";
// import banane from ".././assets/Logo.png";
// import test from "./../logo.png";
export const Navbar = () => {
  // console.log(banane);
  return (
    <div>
      <nav
        className='navbar sticky-top navbar-expand-lg'
        style={{ backgroundColor: "#9AAEB4" }}
      >
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'></a>
          <img
            src={require("./Logo.png")}
            alt='Mem-It'
            style={{ width: "4rem " }}
          />
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink to='/signin' className='nav-link active'>
                  Inscription
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/signup' className='nav-link active'>
                  Connexion
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
