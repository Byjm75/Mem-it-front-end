import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { UserData } from '../Pages/Admin/HomeAdmin';
import { DecodTokenType } from '../Pages/Profil';

const cdbreact = require('cdbreact');
const {
  CDBSidebar,
  CDBSidebarMenu,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} = cdbreact;

export const Sidebar = () => {
  const [userToken, setUserToken] = useState<UserData>();

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      const decodToken: DecodTokenType = jwtDecode(accessToken);
      console.log('Token décodé Sidebar:', decodToken);
      setUserToken(decodToken.utilisateur);
    }
  }, []);

  const handleLogout = () => {
    // Permets de ne pas effacer toutes les informations dans le localStorage
    localStorage.removeItem('token');
  };

  return (
    <CDBSidebar
      style={{
        backgroundColor: 'black',
        width: '5rem',
        position: 'sticky',
        top: '70px',
        color: '#806d42',
      }}
    >
      <CDBSidebarHeader prefix={<i className='fa fa-bars' />}>
        <a className='navbar-brand' href='/dashboard'>
          Accueil
        </a>{' '}
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem icon='sticky-note'>
            <a className='navbar-brand' href='/createCategory'>
              Créer une catégorie
            </a>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon='sticky-note'>
            <a className='navbar-brand' href='/createTask'>
              Créer mémo
            </a>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon='th-large'>
            <a className='navbar-brand' href='/categorie'>
              Catégories
            </a>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon='user' iconType='solid'>
            <a className='navbar-brand' href='/profil'>
              Profil
            </a>
          </CDBSidebarMenuItem>
         
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div
          className='sidebar-btn-wrapper'
          style={{ padding: '20px 5px', fontSize: '12px' }}
        >
          <a className='navbar-brand' href='/signin' onClick={handleLogout}>
            Déconnexion
          </a>
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};
