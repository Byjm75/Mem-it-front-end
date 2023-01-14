import axios, { AxiosResponse } from 'axios';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { DropdownPropsMemo } from '../interface/Interface';

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

  const handleSubmitForm = async (e: FormEvent) => {
    console.log('handleSubmitForm');
    e.preventDefault();

    console.log(titleElement.current?.value);
    console.log(date_eventElement.current?.value);
    console.log(bodyElement.current?.value);
    console.log(ImageElement.current?.value);
    console.log(urlElement.current?.value);

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
        window.location.reload();
      });
  };

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
        window.location.reload();
      });
  };
  // },[]);

  return (
    <div>
      <div className='dropdown d-flex justify-content-end'>
        <Button
          className='btn btn-danger dropdown-toggle'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        ></Button>
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
          <Modal.Title>Modifier memo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FloatingLabel
              controlId='floatingInput'
              label='Memo'
              className='mb-3'
            >
              <Form.Control type='text' placeholder='memo' ref={titleElement} />
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
