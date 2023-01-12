import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { DecodTokenType, UserData } from '../Interface/Interface';

const cdbreact = require('cdbreact');
const {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} = cdbreact;

export const Sidebar = () => {
  const [userToken, setUserToken] = useState<UserData>();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      const decodToken: DecodTokenType = jwtDecode(accessToken);
      console.log('Token décodé Sidebar:', decodToken);
      setUserToken(decodToken.utilisateur);
      if (decodToken.utilisateur.role === 'admin') {
        setIsAdmin(true);
      }
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
          <CDBSidebarMenuItem icon='th-large'>
            <a className='navbar-brand' href='/memo'>
              Memos
            </a>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon='th-large'>
            <a className='navbar-brand' href='/categorie'>
              Memos à classer
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
