import React from 'react';

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
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 className="card-title" style={{ margin: '20px 0 0 20px' }}>
              Mon espace
            </h1>
            <img
              src="../assets/profile-icon-png-917.png"
              alt="photo de profile"
              style={{ width: '5em', margin: '5px 25px 0' }}
            />
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
          <h3 className="card-title" style={{ margin: '20px 0 0 20px' }}>
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
