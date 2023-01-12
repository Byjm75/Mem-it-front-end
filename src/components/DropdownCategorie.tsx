import axios, { AxiosResponse } from 'axios';
import { FormEvent, useRef, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Categories, DropdownPropsCat } from '../Interface/Interface';

export const DropdownCategorie = ({ category }: DropdownPropsCat) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categories, setCategories] = useState<Categories | undefined>();

  const titleElement = useRef<HTMLInputElement>(null);
  const ImageElement = useRef<HTMLInputElement>(null);
  const favElement = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmitForm = async (e: FormEvent) => {
    console.log('handleSubmitForm');
    e.preventDefault();

    console.log(titleElement.current?.value);
    console.log(ImageElement.current?.value);
    console.log(favElement.current?.value);

    //   useEffect(() => {
    axios
      .patch(
        `http://localhost:8085/api/categorie/${category.id}`,

        {
          title: titleElement.current?.value,
          favori: favElement.current?.value,
          image: ImageElement.current?.value,
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
        axios.get('http://localhost:8085/api/categorie/');
      });
  };
  //   },[]);
  // useEffect(() => {

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
        axios.get('http://localhost:8085/api/categorie/');
      });
  };
  // },[]);

  return (
    <div>
      <div className='dropdown'>
        <Button
          className='btn btn-secondary dropdown-toggle'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          
        </Button>
        <ul className='dropdown-menu'>
          <li>
            <Button type='button' onClick={handleShow}>
              Modifier
            </Button>
          </li>
          <li>
            <Button type='button' onClick={handleClickForm}>
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
          <form>
            <FloatingLabel
              controlId='floatingInput'
              label='Catégorie'
              className='mb-3'
            >
              <Form.Control
                type='text'
                placeholder='catégorie'
                ref={titleElement}
              />
            </FloatingLabel>
            <div>
              <Form.Control
                className='text-primary'
                type='file'
                accept='image/*'
                ref={ImageElement}
              ></Form.Control>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            Fermer
          </Button>
          <Button variant='success' onClick={handleSubmitForm}>
            Modifier
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

