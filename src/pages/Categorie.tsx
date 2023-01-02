import React from 'react';
import CardCategory from '../components/CardCategory';
import CardPlus from '../components/CardPlus';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import ToolsBar from '../components/ToolsBar';

const Categorie = () => {
  return (
    <div
      className="position-sticky"
      //   style={{
      //     overflow: 'hidden',
      //     position: '-webkit-sticky',

      //     top: '0',
      //     width: '100%',
      //   }}
    >
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
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ position: 'fixed', zIndex: '1', overflow: 'hidden' }}>
          <Sidebar />
        </div>
        <div
          // className="col-3"
          style={{ width: '60%', margin: '0 auto' }}
          // className="col-md-8 offset-md-2 "
        >
          {/* < Searchbar/> */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 className="card-title" style={{ margin: '20px 0 0 20px' }}>
              Catégorie1
            </h1>
            <div>
              <input className="text-primary" type="file" accept="image/*" />
              <img
                src="../assets/profile-icon-png-917.png"
                alt="photo de profile"
                style={{ width: '4em', margin: '5px 25px 0' }}
              />
            </div>
          </div>
          <hr />
          <div className="card">
            <div className="card-header">
              <div
                className="card-tools row"
                style={{ display: 'flex', justifyContent: 'space-around' }}
              >
                <CardPlus />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: '30px',
          // position: 'fixed',
          bottom: '0',
          width: '100%',
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Categorie;
