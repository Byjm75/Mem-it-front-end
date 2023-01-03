import CardCategory from '../components/CardCategory';
import CardFavoris from '../components/CardFavoris';
import CardPlus from '../components/CardPlus';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import ToolsBar from '../components/ToolsBar';

const Dashboard = () => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          position: 'sticky',
          top: '0',
          overflow: 'hidden',
          zIndex: '1',
        }}
      >
        <ToolsBar />
      </div>{' '}
      <div style={{ width: '100%', display: 'flex' }}>
        <Sidebar />
        <div style={{ width: '80%', margin: '0 auto' }}>
          <div
            style={{
              width: '100%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'flex-end',
              margin: '10px 0 0 ',
            }}
          >
            {/* <img
              className="col-3"
              src="../assets/profile-icon-png-917.png"
              alt="profile"
              style={{ width: '4rem' }}
            /> */}
            <h1
              style={{
                color: 'lightslategrey',
                fontWeight: 'bold',
              }}
            >
              Mon espace
            </h1>
          </div>
          <hr />
          <div className="card">
            <div className="card-header">
              <div
                className="card-tools row"
                style={{ display: 'flex', justifyContent: 'space-around' }}
              >
                <CardPlus />
                <CardFavoris />
              </div>
            </div>
          </div>
          <h3
            style={{
              width: '100%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'flex-end',
              margin: '10px 0 0 ',
              padding: '5px 15px 7px',
              color: '#FFFFFF',
              fontWeight: 'bold',
              border: '1px solid lightslategrey',
              borderRadius: '5px',
              backgroundColor: 'lightslategrey',
            }}
          >
            Derniers ajoûts{' '}
          </h3>
          <hr />
          <div className="card">
            <div className="card-header">
              <div
                className="card-tools row"
                style={{ display: 'flex', justifyContent: 'space-around' }}
              >
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '30px' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
