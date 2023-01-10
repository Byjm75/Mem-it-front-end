import React from 'react';
import { Memos } from '../Pages/Memos';
import { AddCardCategorie } from './AddCardCategorie';
import { AddCardMemo } from './AddCardMemo';

interface CardmemoProps {
  carte: Memos;
}

const photoChange = () => {
  // let photo : string= categoryAffich.image
  // if (photo===undefined)
  // {photo="<img src='../assets/profile-icon-png-917.png' alt='categorie'"}
  // else return photo= categoryAffich.image
};

const CardMemo = ({ carte }: CardmemoProps) => {
  let photo: string = carte.image;
  if (photo === undefined) {
    photo = "<img src='../assets/profile-icon-png-917.png' alt='categorie'";
  } else {
    photo = carte.image;
  }

  return (
    <div
      className="card"
      style={{
        width: ' 13rem',
        height: '17rem',
        borderRadius: '5%',
        margin: '0 0 10px ',
        backgroundColor: 'lightblue',
        
      }}
    >
      <div style={{ width: '95%', margin: '15px auto' }}>
        {/* <div
          style={{
            width: '100%',
            border: '1px solid white',
            borderRadius: '7px',
            padding: '0.5rem',
          }}
        >
          <AddCardMemo />
        </div> */}
        <div
          className="btn btn- col-sm-12"
          style={{
            margin: '15px auto',
            borderColor: 'white',
          }}
        >
          <img src={carte.image} alt="illustration mémo" />
        </div>
      </div>
      <div className="card-body">
        <h5
          className="card-title"
          style={{
            textAlign: 'center',
            border: 'solid 2px #9AAEB4',
            borderRadius: '10px',
            // width: '80%',
            margin: ' auto',
            backgroundColor: '#007872',
            padding:'10px' ,

            color: 'white',
          }}
        >
          <a className="navbar-brand" href="/memo">
            {carte.title}
          </a>
        </h5>
      </div>
    </div>
  );
};

export default CardMemo;
