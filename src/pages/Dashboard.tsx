import AddBtn from '../components/AddBtn';
import CardFavoris from '../components/CardFavoris';
import CardPlus from '../components/CardPlus';
import Footer from '../components/Footer';
import ToolsBar from '../components/ToolsBar';
import { Sidebar } from '../components/Sidebar';
import FooterConnect from '../components/FooterConnect';

const Dashboard = () => {
  return (
    <div style={{ height: '100vh' }}>
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
      <div>
        <div
          style={{
            display: 'flex',
            position: 'fixed',
            overflow: 'hidden',
            zIndex: '1',
          }}
        >
          <Sidebar />
        </div>
        <div style={{ width: '64%', margin: '0 auto' }}>
          <div
            style={{
              width: '100%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'flex-end',
            }}
          >
            <h1
              style={{
                width: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'flex-end',
                margin: '10px 0 0 ',

                color: '#007872',
                fontWeight: 'bold',
              }}
            >
              Mon espace
            </h1>
          </div>
          <hr />

          <div
            className="card-tools row"
            style={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <CardPlus />
            <CardFavoris />
          </div>
          <div>
            <h2
              style={{
                width: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'flex-end',
                margin: '10px 0 0 ',

                color: '#007872',
                fontWeight: 'bold',
              }}
            >
              Derniers ajoûts{' '}
            </h2>

            <hr />

            <div
              className="card-tools row"
              style={{ display: 'flex', justifyContent: 'space-around' }}
            ></div>
          </div>
          <div style={{ position: 'fixed', right: '15px', bottom: '120px' }}>
            <AddBtn />
          </div>
        </div>
        <div
          style={{
            marginTop: '30px',
            position: 'fixed',
            bottom: '0',
            width: '100%',
          }}
        >
          <FooterConnect />
        </div>
      </div>
      {/* <div
        style={{
          marginTop: '30px',
          position: 'fixed',
          bottom: '0',
          width: '100%',
        }}
      >
        <FooterConnect />
      </div>
    </div>
  );
};

export default Dashboard;
