import React from 'react';

const CardFavoris = () => {
  return (
    <div className="card" style={{ width: ' 14rem',margin:'0 0 10px ' }}>
      <div>
        <div
          className="btn btn- col-sm-12"
          style={{
            width: '95%',
            borderColor: '#9AAEB4',
            margin: '15px 8px',
          }}
        >
          <img
            src="/assets/favoris.png"
            className="card-img"
            alt="favoris"
            style={{ width: '80%' }}
          />
        </div>
      </div>
      <div className="card-body">
        <h5
          className="card-title"
          style={{
            textAlign: 'center',
            border: 'solid 2px #9AAEB4',
            borderRadius: '15px',
            width: '80%',
            margin: 'auto',
            backgroundColor: '#9AAEB4',
            color: 'white',
          }}
        >
          Favoris
        </h5>
      </div>
    </div>
  );
};

export default CardFavoris;