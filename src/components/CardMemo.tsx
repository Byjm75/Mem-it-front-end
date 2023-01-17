import { CardmemoProps } from '../interface/Interface';

import { DropdownMemo } from './DropdownMemo';

export const CardMemo = ({ memoAffich }: CardmemoProps) => {
  let photo: string = memoAffich.image;
  if (photo === undefined) {
    photo = "<img src='../assets/profile-icon-png-917.png' alt='categorie'";
  } else {
    photo = memoAffich.image;
  }

  return (
    <div
      className=""
      style={{
        width: ' 13.5rem',
        height: '17rem',
        borderRadius: '5%',
        margin: ' 20px 0 ',
        backgroundColor: 'black',
        borderColor: '#806d42',
      }}
    >
       <h5
        className="card-title pb-0"
        style={{
          textAlign: 'center',
          border: 'solid 2px #806d42',
          borderRadius: '7px',
          width: '100%',
          margin: ' auto',
          backgroundColor: '#806d42',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',

          color: 'white',
        }}
      >
        {' '}
        <div>
           <a className="navbar-brand" href="/memo">
              {memoAffich.title}
            </a>
        </div>
        <div>
          <DropdownMemo memo={memoAffich} />
        </div>
      </h5>
      
      <div style={{ width: '87%', margin: '3px auto' }}>
        <div
          className="btn btn- col-sm-12"
          style={{
            height: '12.7em',
            margin: '15px auto',
            border: ' solid 2px #806d42',
            backgroundColor: 'black',
          }}
        >
          {/* <div className="card-body"> */}
          <h5
            className="card-title"
            style={{
              textAlign: 'center',
              border: 'solid 2px #806d42',
              borderRadius: '7px',
              // width: '80%',
              margin: ' auto',
              backgroundColor: '#806d42',
              padding: '10px',

              color: 'white',
            }}
          >
            {' '}
            {/* <a className="navbar-brand" href="/memo">
              {memoAffich.title}
            </a> */}
          </h5>
          {/* </div> */}

          <img
            src={memoAffich.image}
            alt="illustration memo"
            style={{ width: '100%', borderRadius: '7px', marginTop: '4px' }}
          />
        </div>
      </div>
    </div>
  );
};
