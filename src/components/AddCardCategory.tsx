import { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const CategoriesForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="danger"
        onClick={handleShow}
        style={{
          // fontSize: '500px',
          zIndex: '2',
          translate: '0 -150px',
          position: 'absolute',
          right: '50px',
        }}
      >
        <i className="bi bi-plus" ></i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          />
        </svg>
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

            {/* <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
              >
                Créer
              </button>
            </div> */}
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
