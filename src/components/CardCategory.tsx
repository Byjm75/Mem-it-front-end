import { useEffect, useState } from 'react';
import { CardcategoryProps } from '../interface/Interface';
import { DropdownCategorie } from './DropdownCategorie';

export const CardCategory = ({ categoryAffich }: CardcategoryProps) => {
  const [listImgDisplayed, setListImgDisplayed] = useState<string>();
  console.log('bonjour je suis votre url : ', categoryAffich.image);

  useEffect(() => {
    if (
      categoryAffich.image ===
      'https://www.lacourdespetits.com/wp-content/uploads/2015/12/logo_lacourdespetits.jpg'
    ) {
      console.log('image de base');
      setListImgDisplayed(
        'https://www.lacourdespetits.com/wp-content/uploads/2015/12/logo_lacourdespetits.jpg'
      );
    }
    if (
      categoryAffich.image !==
      'https://www.lacourdespetits.com/wp-content/uploads/2015/12/logo_lacourdespetits.jpg'
    ) {
      console.log('image sur mesure');
      fetch(`http://localhost:8085/api/image/${categoryAffich.image}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
        .then((resp) => resp.blob())
        .then((image) => {
          const reader = new FileReader();

          reader.readAsDataURL(image);
          reader.onloadend = () => {
            let base64Data = reader.result;
            if (base64Data) {
              setListImgDisplayed(base64Data.toString());
            }
          };
        })
        .then((res) => {});
    }
  }, []);

  return (
    <div
      className="container-card-cat"
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
        className="card-title d-flex t"
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
        <a className="navbar-brand" href={`/memo/${categoryAffich.id}`}>
          <h5 style={{paddingLeft:'5px'}}>{categoryAffich.title}</h5>
        </a>
        <div className="">
          <DropdownCategorie category={categoryAffich} />
        </div>
      </div>

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
          <img
            src={listImgDisplayed}
            alt="illustration catégorie"
            style={{
              width: '100%',
              borderRadius: '7px',
              marginTop: '4px',
              height: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};
