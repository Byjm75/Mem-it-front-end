import React from 'react';
import { AddCardCategorie } from './AddCardCategorie';

const CardPlus = () => {
  return (
    <div
      className="card"
      style={{
        width: ' 17rem',
        margin: '0 0 10px',
        backgroundColor: 'rgba(180, 200, 200, 0.73)',
      }}
    >
      <div style={{ width: '95%', margin: '15px auto' }}>
        <div
          style={{
            width: '100%',
            border: '1px solid #9AAEB4',
            borderRadius: '7px',
            padding: '0.5rem',
          }}
        >
          <AddCardCategorie />
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
            backgroundColor: '#007872',
            color: 'white',
          }}
        >
          Catégorie
        </h5>
      </div>
    </div>
  );
};

export default CardPlus;
