import { useEffect, useState } from 'react';
import { CardcategoryProps } from '../Interface/Interface';
import {DropdownCategorie} from './DropdownCategorie';

export const CardCategory = ({ categoryAffich }: CardcategoryProps) => {    const [listImgDisplayed, setListImgDisplayed] = useState<string>();
  console.log('bonjour je suis votre url : ', categoryAffich.image)

  useEffect(() =>{
  if (categoryAffich.image==='https://www.lacourdespetits.com/wp-content/uploads/2015/12/logo_lacourdespetits.jpg')
  {
    console.log("image de base")
    setListImgDisplayed('https://www.lacourdespetits.com/wp-content/uploads/2015/12/logo_lacourdespetits.jpg');
  }
  if(categoryAffich.image!=='https://www.lacourdespetits.com/wp-content/uploads/2015/12/logo_lacourdespetits.jpg'){
   console.log("image sur mesure")
    fetch  (`http://localhost:8085/api/image/${categoryAffich.image}`,{
    headers:  {Authorization: `Bearer ${localStorage.getItem('token')}` }})
    
    .then((resp) => resp.blob())
    .then((image) =>{
      const reader = new FileReader();
      
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        let base64Data = reader.result;
        if(base64Data) {
         setListImgDisplayed(base64Data.toString());
        }
        
      }
    })
      .then((res) => {
      })
      ;
      

  
    }
  
},[])

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
      <DropdownCategorie category={categoryAffich} />
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
            src={listImgDisplayed}
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

