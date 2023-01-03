import React from 'react';
import CardPlus from './CardPlus';
const cdbreact = require('cdbreact');
const {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} = cdbreact;

const Sidebar = () => {

  
  return (
    <CDBSidebar style={{ backgroundColor: '#9AAEB4', width: '5rem',position:'sticky',top:'88px'}}>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        <a className="navbar-brand" href="/">
          Accueil
        </a>{' '}
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem icon="sticky-note">
            <a className="navbar-brand" href="/">
              Créer catégorie
            </a>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note">
            <a className="navbar-brand" href="/">
              Créer mémo
            </a>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="th-large">
            <a className="navbar-brand" href="/">
              Organiser
            </a>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            <a className="navbar-brand" href="/categorie">
              Catégorie 1
            </a>
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div className="sidebar-btn-wrapper" style={{ padding: '20px 5px', fontSize:'12px' }}>
          <a className="navbar-brand" href="/signin">
            Déconnexion
          </a>{' '}
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default Sidebar;
