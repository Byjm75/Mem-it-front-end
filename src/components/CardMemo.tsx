import { CardmemoProps } from '../Interface/Interface';

import DropdownMemo from './DropdownMemo';

const CardMemo = ({ memoAffich }: CardmemoProps) => {
  let photo: string = memoAffich.image;
  if (photo === undefined) {
    photo = "<img src='../assets/profile-icon-png-917.png' alt='categorie'";
  } else {
    photo = memoAffich.image;
  }

  return (
    <div
      className="card"
      style={{
        width: ' 13rem',
        // height: '17rem',
        borderRadius: '5%',
        margin: '0 10px 10px ',
        backgroundColor: 'lightblue',
      }}
    >
      <DropdownMemo memo={memoAffich} />
      <div style={{ width: '95%', margin: '15px auto' }}>
        <div
          className="btn btn- col-sm-12"
          style={{
            margin: '15px auto',
            borderColor: 'white',
          }}
        >
          <img
            src={memoAffich.image}
            alt="illustration memo"
            style={{ width: '100%' }}
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

            margin: ' auto',
            backgroundColor: '#007872',
            padding: '10px',

            color: 'white',
          }}
        >
          {' '}
          <a className="navbar-brand" href="/memo">
            {memoAffich.title}
          </a>
        </h5>
      </div>
    </div>
  );
};

export default CardMemo;
