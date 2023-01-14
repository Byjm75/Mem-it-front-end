import axios, { AxiosResponse } from 'axios';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DropdownPropsMemo } from '../Interface/Interface';

export const DropdownMemo = ({ memo }: DropdownPropsMemo) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [memos, setMemos] = useState<DropdownPropsMemo | undefined>();

  const titleElement = useRef<HTMLInputElement>(null);
  const date_eventElement = useRef<HTMLInputElement>(null);
  const bodyElement = useRef<HTMLInputElement>(null);
  const ImageElement = useRef<HTMLInputElement>(null);
  const urlElement = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmitForm = async (e: FormEvent) => {
    console.log('handleSubmitForm');
    e.preventDefault();

    console.log(titleElement.current?.value);
    console.log(date_eventElement.current?.value);
    console.log(bodyElement.current?.value);
    console.log(ImageElement.current?.value);
    console.log(urlElement.current?.value);

    //   useEffect(() => {
    axios
      .patch(
        `http://localhost:8085/api/tache/${memo.id}`,

        {
          title: titleElement.current?.value,
          date_event: date_eventElement.current?.value,
          bodyElement: bodyElement.current?.value,
          image: ImageElement.current?.value,
          urlElement: urlElement.current?.value,
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
        alert('Memo modifiée!');
        setMemos(response.data.data);
        handleClose();
        axios.get('http://localhost:8085/api/tache/');
      });
  };
  //   },[]);
  // useEffect(() => {

  const handleClickForm = async () => {
    await axios
      .delete(`http://localhost:8085/api/tache/${memo.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log('response ', response.data.data);

        console.log(response, 'res');
        alert('Catégorie modifiée!');
        setMemos(response.data.data);
        handleClose();
        axios.get('http://localhost:8085/api/tache/');
      });
  };
  // },[]);

  return (
    <div>
      <div className="dropstart  d-flex justify-content-end">
        <Button
          className="btn btn-secondary "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            fontSize: '10px',
            backgroundColor: '#806d42',
            borderColor: '#806d42',
          }}
        >
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>{' '}
        </Button>
        <ul className="dropdown-menu bg-dark" style={{ width: '50%' }}>
          <li>
            <Button
              className="btn btn-success"
              type="button"
              style={{ width: '100%', marginBottom: '5px' }}
              onClick={handleShow}
            >
              Modifier
            </Button>
          </li>
          <li>
            <Button
              className="btn btn-danger"
              type="button"
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
          <Modal.Title>Modifier memo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FloatingLabel
              controlId="floatingInput"
              label="Memo"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="memo" ref={titleElement} />
            </FloatingLabel>
            <div>
              <Form.Control
                className="text-primary"
                type="file"
                accept="image/*"
                ref={ImageElement}
              ></Form.Control>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="success" onClick={handleSubmitForm}>
            Modifier
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
