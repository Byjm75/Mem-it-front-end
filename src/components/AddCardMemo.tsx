import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const AddCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   
    <>
      <Button variant="success" onClick={handleShow}>
        Ajout d'un mémo
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Création d'une catégorie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading this text in a modal!
          <form>
            <div className="form-outline mb-4">
              <input
                type="text"
                id="form3Example1cg"
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="form3Example1cg">
                Your Name
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="email"
                id="form3Example3cg"
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="form3Example3cg">
                Your Email
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                id="form3Example4cg"
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="form3Example4cg">
                Password
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                id="form3Example4cdg"
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="form3Example4cdg">
                Repeat your password
              </label>
            </div>

            <div className="form-check d-flex justify-content-center mb-5">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="form2Example3cg"
              />
              <label className="form-check-label" htmlFor="form2Example3g">
                I agree all statements in{' '}
                <a href="#!" className="text-body">
                  <u>Terms of service</u>
                </a>
              </label>
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
              >
                Register
              </button>
            </div>

            <p className="text-center text-muted mt-5 mb-0">
              Have already an account?{' '}
              <a href="#!" className="fw-bold text-body">
                <u>Login here</u>
              </a>
            </p>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </> 
  );
};

export default AddCard;
