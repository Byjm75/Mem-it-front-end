import React, { useEffect, useState } from 'react';
import { json } from 'react-router-dom';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const loggedUser = localStorage.getItem('utilisateur');
    if (loggedUser) {
      const foundUser = JSON.parse(loggedUser);
      setEmail(foundUser);
    }
  }, []);

  const handleLogout = () => {
    setEmail('');
    setPassword('');
    localStorage.clear();
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
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        <a className="navbar-brand" href="/dashboard">
          Accueil
        </a>{' '}
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem icon="sticky-note">
            <a className="navbar-brand" href="/createCategory">
              Créer une catégorie
            </a>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note">
            <a className="navbar-brand" href="/createTask">
              Créer mémo
            </a>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="th-large">
            <a className="navbar-brand" href="/categorie">
              Catégories
            </a>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="user" iconType="solid">
            <a className="navbar-brand" href="/profil">
              Profil
            </a>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="lock" iconType="solid">
            <a className="navbar-brand" href="/admin">
              Support Admin
            </a>
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{ padding: '20px 5px', fontSize: '12px' }}
        >
          <a className="navbar-brand" href="/signin" onClick={handleLogout}>
            Déconnexion
          </a>
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};
