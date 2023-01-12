import React from 'react';
// import { AddCardCategorie } from './AddCardCategorie';
import { AddCardMemo } from './AddCardMemo';

export const CardPlusMemo = () => {
  return (
    <div
      className="card"
      style={{
        width: ' 13rem',
        height: '17rem',
                borderRadius: '1rem',
                
        margin: '0 50px 30px 0',
        backgroundColor: 'lightblue',
      }}
    >
      <div style={{ width: '95%', margin: '15px auto' }}>
        <div
          style={{
            width: '100%',
            border: '1px solid white',
            borderRadius: '7px',
            padding: '0.5rem',
          }}
        >
          <AddCardMemo />
        </div>
      </div>
      <div className="card-body">
        <h5
          className="card-title "
          style={{
            textAlign: 'center',
            border: 'solid 2px white',
            borderRadius: '10px',
            width: '80%',
            margin: 'auto',
            backgroundColor: '#007872',
            padding: '10px',

            color: 'white',
          }}
        >
          <a className="navbar-brand" href="/categorie">
            mémos
          </a>
        </h5>
      </div>
    </div>
  );
};

