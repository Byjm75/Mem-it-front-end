import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const CategoriesForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='App'>
      <Button variant='primary' onClick={handleShow}>
        Créer une catégorie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter catégorie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className='form-floating mb-3'>
              <input
                className='form-control'
                id='nomCategorie'
                placeholder='nom de la catégorie'
              />
              <label htmlFor='nomCategorie' className=''></label>
            </div>
            <br />
            <div className='form-floating mb-3'>
              <input
                className='form-control'
                id='nomCategorie'
                placeholder='nom de la catégorie'
              />
              <label htmlFor='nomCategorie' className=''></label>
            </div>
            <br />
            <div className='form-floating mb-3'>
              <input
                className='form-control'
                id='nomCategorie'
                placeholder='nom de la catégorie'
              />
              <label htmlFor='nomCategorie' className=''></label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CategoriesForm;
