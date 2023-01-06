import axios, { AxiosResponse } from 'axios';
import { FormEvent, useRef, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

export const AddCardCategorie = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const titleElement = useRef<HTMLInputElement>(null);
  const ImageElement = useRef<HTMLInputElement>(null);
  const favElement = useRef<HTMLInputElement>(null);
  const navigate=useNavigate()
  const handleSubmitForm = async (e: FormEvent) => {
    console.log('handleSubmitForm');
    e.preventDefault();
    console.log(titleElement.current?.value);
    console.log(ImageElement.current?.value);
    console.log(favElement.current?.value);
    
    axios
      .post('http://localhost:8085/api/categorie', 
       
       { title: titleElement.current?.value,
        favori: favElement.current?.value,
        image: ImageElement.current?.value,
  },
   {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log('response ', response.data);console.log(response, 'res')
        alert('Nouvelle catégorie créée!');
        navigate('/categorie')
      });
  };
  return (
    <>
      <Button
        style={{
          backgroundColor: 'red',
          width: '100%',
        }}
        variant="white "
        onClick={handleShow}
      >
        <img src="/assets/plus.png" className="card-img" alt="escalade" />{' '}
      </Button>



      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Création d'une catégorie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FloatingLabel
              controlId="floatingInput"
              label="Catégorie"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="catégorie" ref={titleElement} />
            </FloatingLabel>
            <div>
              <input className="text-primary" type="file" accept="image/*" ref={ImageElement} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="success" onClick={handleSubmitForm}>
            Créer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
