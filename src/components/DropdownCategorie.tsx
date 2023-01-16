import axios, { AxiosResponse } from 'axios';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Categories, DropdownPropsCat } from '../interface/Interface';

export const DropdownCategorie = ({ category }: DropdownPropsCat) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categories, setCategories] = useState<Categories | undefined>();
const navigate = useNavigate();
  const titleElement = useRef<HTMLInputElement>(null);
  const ImageElement = useRef<HTMLInputElement>(null);
  const favElement = useRef<HTMLInputElement>(null);
 const [file, setFile] = useState<File>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let files = event.target.files?.[0];

    if (!files) {
      return;
    }
    setFile(files);
  };
  const handleSubmitForm = async (e: FormEvent) => {
    console.log('handleSubmitForm');
    e.preventDefault();

    console.log(titleElement.current?.value);
    console.log(ImageElement.current?.value);
    console.log(favElement.current?.value);
if(ImageElement.current?.value===""){
    axios
      .patch(
        `http://localhost:8085/api/categorie/${category.id}`,

        {
          title: titleElement.current?.value,
          favori: favElement.current?.value,
          
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log('response ', response.data.data);

        console.log(response, 'res');
        alert('Catégorie modifiée!');
        setCategories(response.data.data);
        handleClose();
        window.location.reload();
      });}
      if(file && titleElement.current?.value){
        const formData = new FormData();
        if(file){
      formData.append('file', file);}
      if(titleElement.current.value!== ""){
      formData.append('categorieTitle', titleElement.current.value)};
       axios({
        method: 'post',
        url: `http://localhost:8085/api/image/${category.id}`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response: any) => {
          console.log(response.data);
          alert('Catégorie modifiée!');
          navigate('/dashboard');
          window.location.reload();
        })
        .catch((error: any) => {
          console.error(error);
        });
        

      }
      if(file && (titleElement.current?.value ==="")){
        const formData = new FormData();
        formData.append('file', file);
        axios({
        method: 'post',
        url: `http://localhost:8085/api/image/${category.id}`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response: any) => {
          console.log(response.data);
          alert('Catégorie modifiée!');
          navigate('/dashboard');
          window.location.reload();
        })
        .catch((error: any) => {
          console.error(error);
        });
      }
      if(!file && (titleElement.current?.value)){
        
        axios.patch(`http://localhost:8085/api/categorie/${category.id}`,
        {title: titleElement.current.value},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
        )
      
       
        .then((response: any) => {
          console.log(response.data);
          alert('Catégorie modifiée!');
          navigate('/dashboard');
          window.location.reload();
        })
        .catch((error: any) => {
          console.error(error);
        });
      }
  };

  const handleClickForm = async () => {
    await axios
      .delete(`http://localhost:8085/api/categorie/${category.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log('response ', response.data.data);

        console.log(response, 'res');
        alert('Catégorie modifiée!');
        setCategories(response.data.data);
        handleClose();
        window.location.reload();
      });
  };

  return (
    <div>
      <div
        style={{ zIndex: '0' }}
        className='dropstart  d-flex justify-content-end '
      >
        <Button
          className='btn btn-secondary'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
          style={{
            fontSize: '10px',
            backgroundColor: '#806d42',
            borderColor: '#806d42',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-three-dots'
            viewBox='0 0 16 16'
          >
            <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
          </svg>{' '}
        </Button>
        <ul className='dropdown-menu  bg-dark ' style={{ width: '50%' }}>
          <li>
            <Button
              className='btn btn-success'
              type='button'
              style={{ width: '100%', marginBottom: '5px' }}
              onClick={handleShow}
            >
              Modifier
            </Button>
          </li>
          <li>
            <Button
              className='btn btn-danger'
              type='button'
              style={{ width: '100%' }}
              onClick={handleClickForm}
            >
              Supprimer
            </Button>
          </li>
        </ul>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier catégorie</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <form onSubmit={handleSubmitForm}>
            
              <input
                type='text'
                placeholder='catégorie'
                ref={titleElement}
              />
            
            <div>
              <input
                className='text-primary'
                type='file'
                accept='image/*'
                id='image'
                onChange={handleFileChange}
              ></input>
            </div>
          
        
        
        
          <Button variant='danger' onClick={handleClose}>
            Fermer
          </Button>
          <Button variant='success' type='submit'>
            Modifier
          </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
