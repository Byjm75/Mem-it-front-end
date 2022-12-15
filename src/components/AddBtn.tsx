import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const AddBtn = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='App'>
      <Button variant='primary' onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Ajout</Modal.Title>

          <ul className='nav nav-tabs' id='myTab' role='tablist'>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link active'
                id='category-tab'
                data-bs-toggle='tab'
                data-bs-target='#category-tab-pane'
                type='button'
                role='tab'
                aria-controls='category-tab-pane'
                aria-selected='true'
              >
                Nouvelle catégorie
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link'
                id='memo-tab'
                data-bs-toggle='tab'
                data-bs-target='#memo-tab-pane'
                type='button'
                role='tab'
                aria-controls='memo-tab-pane'
                aria-selected='false'
              >
                Nouveau mémo
              </button>
            </li>
          </ul>
        </Modal.Header>
        <Modal.Body>
          <div className='tab-content' id='myTabContent'>
            <div
              className='tab-pane fade show active'
              id='category-tab-pane'
              role='tabpanel'
              aria-labelledby='category-tab'
              tabIndex={0}
            >
              <div>
                <input
                  className='form-control'
                  id='nomCategorie'
                  placeholder='nom de la catégorie'
                />
                <label htmlFor='nomCategorie' className=''></label>
              </div>
              <div>
                Image de catégorie :
                <input
                  type='file'
                  accept='image/*'
                  className='form-control'
                  id='image'
                  placeholder='image de la catégorie'
                />
                <label htmlFor='image' className=''></label>
              </div>
              <div>
                <Button variant='primary' onClick={handleClose}>
                  Ajouter
                </Button>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='memo-tab-pane'
              role='tabpanel'
              aria-labelledby='memo-tab'
              tabIndex={0}
            >
              <div>
                <input
                  className='form-control'
                  id='nomMemo'
                  placeholder='nom du mémo'
                />
                <label htmlFor='nomMemo' className=''></label>
              </div>
              <div>
                <input
                  className='form-control'
                  type='datetime-local'
                  id='eventDate'
                  placeholder="date de l'évènement"
                />
                <label htmlFor='eventDate' className=''></label>
              </div>
              <div>
                <textarea
                  className='form-control'
                  id='bodyMemo'
                  placeholder='description'
                />
                <label htmlFor='bodyMemo' className=''></label>
              </div>
              <div>
                <input
                  type='file'
                  className='form-control'
                  id='memoImage'
                  placeholder='image du mémo'
                />
                <label htmlFor='memoImage' className=''></label>
              </div>
              <div>
                <input
                  className='form-control'
                  type='url'
                  id='url'
                  placeholder='lien internet'
                />

                <label htmlFor='url' className=''></label>
              </div>
              <div>
                <input
                  className='form-control'
                  id='memoCategory'
                  placeholder='Catégorie du mémo, futur menu deroulant'
                />
                <label htmlFor='memoCategory' className=''></label>
              </div>

              <div>
                <Button variant='primary' onClick={handleClose}>
                  Ajouter
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddBtn;
