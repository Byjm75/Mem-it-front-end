import React from 'react';
import { CardcategoryProps, Categories } from '../Interface/Interface';
import Dropdown from './Dropdown'


const CardCategory = ({ categoryAffich }: CardcategoryProps) => {
  let photo: string = categoryAffich.image;
  if (photo === undefined) {
    photo = "<img src='../assets/profile-icon-png-917.png' alt='categorie'";
  } else {
    photo = categoryAffich.image;
  }

  
  return (
    <div
      className="card"
      style={{
        width: ' 13.5rem',
        // height: '17rem',
        borderRadius: '5%',
        margin: '0 10px 10px ',
        backgroundColor: 'lightblue',
      }}
    >
      <Dropdown category={categoryAffich} />
      <div style={{ width: '95%', margin: '15px auto' }}>
        <div
          className="btn btn- col-sm-12"
          style={{
            margin: '15px auto',
            borderColor: 'white',
            backgroundColor: 'white',
          }}
        >
          <img
            src={categoryAffich.image}
            alt="illustration catégorie"
            style={{ width: '100%', borderRadius: '5px' }}
          />
        </div>
      </div>
      <div className="card-body">
        <h5
          className="card-title"
          style={{
            textAlign: 'center',
            border: 'solid 2px white',
            borderRadius: '10px',
            // width: '80%',
            margin: ' auto',
            backgroundColor: '#007872',
            padding: '10px',

            color: 'white',
          }}
        >
          {' '}
          <a className="navbar-brand" href="/memo">
            {categoryAffich.title}
          </a>
        </h5>
      </div>
    </div>
  );
};

export default CardCategory;
