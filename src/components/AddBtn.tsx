import Modal from 'react-bootstrap/Modal';
import { FormEvent, useRef, useState } from 'react';
import { FormEvent, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios, { AxiosResponse } from 'axios';
import { ScrollCat } from './ScrollCat';
import { Categories } from '../interface/Interface';
import { useNavigate } from 'react-router-dom';

let userSelectCat: Categories;

export const AddBtn = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const titleElement = useRef<HTMLInputElement>(null);
  const ImageElement = useRef<HTMLInputElement>(null);
  const favElement = useRef<HTMLInputElement>(null);
  const handleSelectCategorie = (cat: Categories) => {
    userSelectCat = cat;
    console.log('CreateMemo - catégorie sélectionnée : ', userSelectCat);
  };
  const [file, setFile] = useState<File>();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let files = event.target.files?.[0];

    if (!files) {
      return;
    }
    setFile(files);
  };
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(file);
    console.log(titleElement.current?.value);
    if (file && titleElement.current?.value) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('categorieTitle', titleElement.current.value);

      axios({
        method: 'post',
        url: 'http://localhost:8085/api/image/upload',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response: any) => {
          console.log(response.data);
          alert('Nouvelle catégorie créée!');
          handleClose();
          navigate('/dashboard');
          window.location.reload();
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
    const inputTitle = titleElement.current?.value;
    if ((file === undefined || null) && (inputTitle !== undefined || null)) {
      axios
        .post(
          'http://localhost:8085/api/categorie',

          { title: titleElement.current?.value, image: '' },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        .then((response: AxiosResponse<{ data: any }>) => {
          console.log('response ', response.data);
          console.log(response, 'res');
          alert('Nouvelle catégorie créée!');
          handleClose();
          navigate('/dashboard');
          window.location.reload();
        });
    }
  };

  const taskTitleElement = useRef<HTMLInputElement>(null);
  const taskEventDateElement = useRef<HTMLInputElement>(null);
  const taskBodyElement = useRef<HTMLInputElement>(null);
  const taskImageElement = useRef<HTMLInputElement>(null);
  const taskUrlElement = useRef<HTMLInputElement>(null);
  console.log(
    'Ceci est la valeur de la date memo',
    taskEventDateElement.current?.value,
    ''
  );
  const handleTaskSubmitForm = async (e: FormEvent) => {
    console.log('handleSubmitForm');
    e.preventDefault();
    console.log(taskTitleElement.current?.value);
    console.log(taskBodyElement.current?.value);
    console.log(taskImageElement.current?.value);
    console.log(taskUrlElement.current?.value);

    console.log(
      'Ceci est la valeur de la date memo',
      taskEventDateElement.current?.value,
      ''
    );
    if (!taskEventDateElement.current?.value) {
      axios
        .post(
          'http://localhost:8085/api/tache',
          {
            title: taskTitleElement.current?.value,
            date_event: null,
            body: taskBodyElement.current?.value,
            image: taskImageElement.current?.value,
            url: taskUrlElement.current?.value,
            categorie_: userSelectCat,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        .then((response: AxiosResponse<{ data: any }>) => {
          console.log('response ', response.data);
          alert('Nouveau mémo crée!');
          handleClose();
          if (userSelectCat) {
            navigate(`/memo/${userSelectCat.id}`);
            window.location.reload();
          } else {
            navigate('/memoUnCat');
            window.location.reload();
          }
        });
    } else {
      axios
        .post(
          'http://localhost:8085/api/tache',
          {
            title: taskTitleElement.current?.value,
            date_event: taskEventDateElement.current?.value,
            body: taskBodyElement.current?.value,
            image: taskImageElement.current?.value,
            url: taskUrlElement.current?.value,
            categorie_: userSelectCat,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        .then((response: AxiosResponse<{ data: any }>) => {
          console.log('response ', response.data);
          alert('Nouveau mémo crée!');
          handleClose();
          if (userSelectCat) {
            navigate(`/memo/${userSelectCat.id}`);
            window.location.reload();
          } else {
            navigate('/memoUnCat');
            window.location.reload();
          }
        });
    }
  };

  return (
    <div className="App">
      <Button
        variant="danger"
        onClick={handleShow}
        style={{ padding: '0px 25px', fontSize: '45px' }}
      >
        +
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Ajout</Modal.Title>

          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="category-tab"
                data-bs-toggle="tab"
                data-bs-target="#category-tab-pane"
                type="button"
                role="tab"
                aria-controls="category-tab-pane"
                aria-selected="true"
              >
                Nouvelle catégorie
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="memo-tab"
                data-bs-toggle="tab"
                data-bs-target="#memo-tab-pane"
                type="button"
                role="tab"
                aria-controls="memo-tab-pane"
                aria-selected="false"
              >
                Nouveau mémo
              </button>
            </li>
          </ul>
        </Modal.Header>
        <Modal.Body>
          <div className="tab-content" id="myTabContent">
            <form onSubmit={handleSubmit}>
              <div
                className="tab-pane fade show active"
                id="category-tab-pane"
                role="tabpanel"
                aria-labelledby="category-tab"
                tabIndex={0}
              >
                <div>
                  <input
                    type="text"
                    className="form-control"
                    id="nomCategorie"
                    placeholder="nom de la catégorie"
                    ref={titleElement}
                  />
                  <label htmlFor="nomCategorie" className=""></label>
                </div>
                <div>
                  Image de catégorie :
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    id="image"
                    placeholder="image de la catégorie"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="image" className=""></label>
                </div>
                <div>
                  <Button variant="primary" type="submit">
                    Ajouter
                  </Button>
                </div>
              </div>
            </form>
            <div
              className="tab-pane fade"
              id="memo-tab-pane"
              role="tabpanel"
              aria-labelledby="memo-tab"
              tabIndex={0}
            >
              <ScrollCat onSelectCatTitle={handleSelectCategorie} />
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="nomMemo"
                  placeholder="nom du mémo"
                  ref={taskTitleElement}
                />
                <label htmlFor="nomMemo"></label>
              </div>
              <div>
                <input
                  className="form-control"
                  type="date"
                  id="eventDate"
                  ref={taskEventDateElement}
                />
                <label htmlFor="eventDate" className=""></label>
              </div>

              <div>
                <input
                  className="form-control"
                  type="url"
                  id="url"
                  placeholder="lien internet"
                  ref={taskUrlElement}
                />

                <label htmlFor="url" className=""></label>
              </div>
              <div>
                <input
                  type="textarea"
                  className="form-control"
                  id="bodyMemo"
                  placeholder="Contenu du mémo"
                  ref={taskBodyElement}
                />
                <label htmlFor="bodyMemo" className=""></label>
              </div>
              <div>
                <Button variant="primary" onClick={handleTaskSubmitForm}>
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
