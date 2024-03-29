
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
            display: 'flex',
            justifyContent: 'space-between',
          }}
      >
        <div>
          <a className='navbar-brand' href='/memo'>
            <h5 style={{ paddingLeft: '5px' }}> {memoAffich.title}</h5>
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
          <ul className='listCardMemo'
           >
          <li>{memoAffich.body}</li>
           <li > {memoAffich.date_event?.toLocaleString("fr-FR")}</li>
           </ul>
           

          
          
        </div>
        
      </div>
      
    </div>
    </div>
  );
};
