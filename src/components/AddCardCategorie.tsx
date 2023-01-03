import { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

export const AddCardCategorie = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <div
        // type="button"
        className="btn btn- col-sm-12"
        style={{
          // margin: '15px auto',
          // borderColor: '#9AAEB4',
          //   borderRadius: '30px',
        }}
      > */}
      {/* <img src="/assets/plus.png" className="card-img" alt="escalade" /> */}
      {/* </div> */}
      <Button
        style={{
          backgroundColor: "red",
          width: "100%",
        }}
        variant='white '
        onClick={handleShow}
      >
        <img src='/assets/plus.png' className='card-img' alt='escalade' />{" "}
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Création d'une catégorie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FloatingLabel
              controlId='floatingInput'
              label='Catégorie'
              className='mb-3'
            >
              <Form.Control type='text' placeholder='catégorie' />
            </FloatingLabel>
            <div>
              <input className='text-primary' type='file' accept='image/*' />
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
          <Button variant='danger' onClick={handleClose}>
            Fermer
          </Button>
          <Button variant='success' onClick={handleClose}>
            Créer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
