import jwtDecode from 'jwt-decode';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { DecodTokenType, UserData } from '../Interface/Interface';
import {
  PeopleAlt,
  Notifications,
  AdminPanelSettings,
} from '@mui/icons-material';
import { DecodTokenType, UserData } from '../Interface/Interface';

export const ToolsBar = () => {
  const location = useLocation();
  console.log('la localisation du site', location);
  const navigate = useNavigate();

  const [userToken, setUserToken] = useState<UserData>();

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      const decodToken: DecodTokenType = jwtDecode(accessToken);
      console.log('Token décodé ToolsBar:', decodToken);
      setUserToken(decodToken.utilisateur);
    }
  }, []);

  const profilElement = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate('/profil');
  };
  return (
    <div>
      <nav
        className='navbar  ticky-top navbar-expand d-inline-flex
        '
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
            className='container-fluid'
            style={{ width: '27% ', paddingLeft: '7px', margin: '0 auto 0 0' }}
          >
            <a className='navbar-brand' href='/dashboard'>
              <img
                src='/assets/logo.png'
                alt='Mem-It'
                style={{ width: '4.5rem ' }}
              />
            </a>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-around',
            }}
          >
            <div
              style={{
                width: '73%',
                margin: '20px 0 0 0',
              }}
            >
              {location.pathname !== '/createCategory' && (
                <input
                  className='form-control me-'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                  style={{ borderColor: ' lightslategrey' }}
                />
              )}
            </div>
            {userToken?.role === 'admin' ? (
              <div className='container-fluid d-flex'>
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
                <div
                  className='collapse navbar-collapse d-flex justify-content-around '
                  id='navbarSupportedContent'
                >
                  <ul className='navbar-nav'>
                    <li className='nav-item active'>
                      <a
                        className='nav-link active'
                        // style={{ color: '#806d42' }}
                        aria-current='page'
                        href='/admin'
                      >
                        <AdminPanelSettings
                          style={{ color: '#806d42', fontSize: '50px' }}
                        />
                      </a>
                    </li>

                    <li className='nav-item'>
                      <a
                        className='nav-link active'
                        aria-current='page'
                        href='/adminUsers'
                      >
                        <PeopleAlt
                          style={{ color: '#806d42', fontSize: '50px' }}
                        />
                      </a>
                    </li>
                    <li className='nav-item '>
                      <a
                        className='nav-link active'
                        aria-current='page'
                        href='#'
                      >
                        <Notifications
                          style={{ color: '#806d42', fontSize: '50px' }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <img
                    className='col-3'
                    src='../assets/profile-icon-png-917.png'
                    alt='profile'
                    style={{ width: '5.2rem', margin: '5px 0 0 ' }}
                    onClick={profilElement}
                  />
                </div>
              </div>
            ) : (
              <div>
                <img
                  className='col-3'
                  src='../assets/profile-icon-png-917.png'
                  alt='profile'
                  style={{ width: '5.2rem', margin: '5px 0 0 ' }}
                  onClick={profilElement}
                />
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default ToolsBar;
