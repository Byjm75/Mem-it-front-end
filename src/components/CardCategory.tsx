import React from 'react';

const CardCategory = () => {
  return (
    <div className="card" style={{ width: ' 14rem', margin: '0 0 10px ' , backgroundColor: 'lightblue'  }}>
      <div >
        <div
          className="btn btn- col-sm-12"
          style={{
            margin: '15px auto',
            borderColor: 'white',
          }}
        >
          <img src="/assets/escalade.jpg" className="card-img" alt="escalade" />
        </div>
      </div>
      <div className="card-body" >
        <h5
          className="card-title"
          style={{
            textAlign: 'center',
            border: 'solid 2px white',
            borderRadius: '10px',
            width: '80%',
            margin: ' auto',
            backgroundColor: '#007872',
            padding: '10px',
            // backgroundColor: 'lightslategrey',

            color: 'white',
          }}
        >
          Catégorie 1
        </h5>
      </div>
    </div>
  );
};

export default CardCategory;
