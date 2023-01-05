import { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const AddCardCategorie = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              <Form.Control type="text" placeholder="catégorie" />
            </FloatingLabel>
            <div>
              <input className="text-primary" type="file" accept="image/*" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="success" onClick={handleClose}>
            Créer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
