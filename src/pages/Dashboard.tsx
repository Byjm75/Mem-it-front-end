import AddBtn from '../components/AddBtn';
import CardFavoris from '../components/CardFavoris';
import CardPlus from '../components/CardPlus';
import Footer from '../components/Footer';
import ToolsBar from '../components/ToolsBar';
import {Sidebar} from '../components/Sidebar';
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
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'fixed',
            overflow: 'hidden',
            zIndex: '1',
          }}
        >
          <ToolsBar />
        </div>{' '}
        <div>
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
              style={{ display: 'flex', justifyContent: 'space-around' }}
            ></div>
          </div>
        </div>
      </div>
      <div style={{ height: '150px' }}>
        {' '}
        <div style={{ position: 'fixed', right: '15px', bottom: '120px' }}>
          <AddBtn />
        </div>
      </div>

      <FooterConnect />
    </div>
  );
};

export default Dashboard;
