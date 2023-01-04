import React from 'react';
import { Categories } from '../Pages/Categorie';
interface CardcategoryProps{
  categoryAffich : Categories;
}
const CardCategory = ({categoryAffich} : CardcategoryProps)  => {
  return (
    <div
      className="card"
      style={{
        width: ' 17rem',
        margin: '0 0 10px ',
        backgroundColor: 'rgba(180, 200, 200, 0.73)',
      }}
    >
      <div>
        <div
          className="btn btn- col-sm-12"
          style={{
            margin: '15px auto',
            borderColor: '#9AAEB4',
          }}
        >
          <img src={categoryAffich.image} alt ="illustration catégorie"/>
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
            margin: ' auto',
            backgroundColor: '#007872',

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
