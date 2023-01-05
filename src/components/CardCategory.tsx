import React from 'react';
import { Categories } from '../pages/Categorie';
interface CardcategoryProps {
  categoryAffich: Categories;
}
const CardCategory = ({ categoryAffich }: CardcategoryProps) => {
  return (
    <div
      className='card'
      style={{
        width: ' 14rem',
        margin: '0 0 10px ',
        backgroundColor: 'lightblue',
      }}
    >
      <div>
        <div
          className='btn btn- col-sm-12'
          style={{
            margin: '15px auto',
            borderColor: 'white',
          }}
        >
          <img src={categoryAffich.image} alt='illustration catégorie' />
        </div>
      </div>
      <div className='card-body'>
        <h5
          className='card-title'
          style={{
            textAlign: 'center',
            border: 'solid 2px white',
            borderRadius: '10px',
            width: '80%',
            margin: ' auto',
            backgroundColor: '#007872',
            padding: '10px',

            color: 'white',
          }}
        >
          {categoryAffich.title}
        </h5>
      </div>
    </div>
  );
};

export default CardCategory;
