import jwtDecode from 'jwt-decode';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserData } from '../Pages/Admin/HomeAdmin';
import { DecodTokenType } from '../Pages/Profil';
import Searchbar from './Searchbar';
import {
  Logout,
  PeopleAlt,
  Notifications,
  Settings,
} from '@mui/icons-material';

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
        className='navbar  ticky-top navbar-expand-'
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
              <Searchbar />
            </div>
            {userToken?.role === 'admin' && (
              <div className='collapse navbar-collapse'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li className='nav-item'>
                    <a
                      className='nav-link active'
                      aria-current='page'
                      href='/adminUsers'
                    >
                      <PeopleAlt />
                    </a>
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
            )}<div>
                <img
                  className='col-3'
                  src='../assets/profile-icon-png-917.png'
                  alt='profile'
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
