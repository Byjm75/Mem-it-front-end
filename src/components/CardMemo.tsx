import { memo } from 'react';
import { CardmemoProps } from '../interface/Interface';
import { DropdownMemo } from './DropdownMemo';

export const CardMemo = ({ memoAffich }: CardmemoProps) => {
  // const date : string = memoAffich.date_event.toDateString()
  console.log('bonjour je suis votre url : ', memoAffich.image);

  return (
    <div>
    <div
      className='container-card-cat'
      style={{
        width: ' 13.5rem',
        height: '17rem',
        borderRadius: '5%',
        margin: ' 20px 0 ',
        backgroundColor: 'black',
        borderColor: '#806d42',
      }}
    >
      <div
        className='card-title d-flex'
        style={{
          textAlign: 'center',
          border: 'solid 2px #806d42',
          borderRadius: '7px',
          margin: ' auto',
          backgroundColor: '#806d42',
          color: 'white',
        }}
      >
        <div>
          <a className='navbar-brand' href='/memo'>
            <h5> {memoAffich.title}</h5>
          </a>
          
        </div>
        <div>
          <DropdownMemo memo={memoAffich} />
        </div>
      </div>
      <div style={{ width: '87%', margin: '3px auto' }}>
        <div
          className='btn btn- col-sm-12'
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '12.7em',
            margin: '15px auto',
            border: ' solid 2px #806d42',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          
          {/* <p> {memoAffich.date_event && memoAffich.body}</p> */}

          {/* {memoAffich.date_event !== null ? (
            memoAffich.date_event && memoAffich.body
          ) : (
            <div>{memoAffich.body}</div>
          )} */}
        </div>
      </div>
    </div>
    </div>
  );
};
