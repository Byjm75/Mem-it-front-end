import React from 'react';
import './AdminTopBar.css';
import {
  Logout,
  PeopleAlt,
  Notifications,
  Settings,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const AdminTopBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          DASHBOARD ADMIN MEM-IT
        </a>
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
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink to='/UserAdmin'>
                <a className='nav-link active' aria-current='page' href='/'>
                  <PeopleAlt />
                </a>
              </NavLink>
            </li>

            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                <Notifications />
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                <Settings />
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                <Logout />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminTopBar;
