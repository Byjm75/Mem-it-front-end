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
            <a className="navbar-brand" href="/createCategorie">
              Créer catégorie
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
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            <a className="navbar-brand" href="/profil">
              Profil
            </a>
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{ padding: '20px 5px', fontSize: '12px' }}
        >
          <a className="navbar-brand" href="/signin">
            Déconnexion
          </a>
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default Sidebar;
