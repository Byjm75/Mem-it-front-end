import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const AddBtn = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const titleElement = useRef<HTMLInputElement>(null);
  const ImageElement = useRef<HTMLInputElement>(null);
  const favElement = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const handleSubmitForm = async (e: FormEvent) => {
    console.log("handleSubmitForm");
    e.preventDefault();
    console.log(titleElement.current?.value);
    console.log(ImageElement.current?.value);
    console.log(favElement.current?.value);

    axios
      .post(
        "http://localhost:8085/api/categorie",

        {
          title: titleElement.current?.value,
          favori: favElement.current?.value,
          image: ImageElement.current?.value,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log("response ", response.data);
        console.log(response, "res");
        alert("Nouvelle catégorie créée!");
        navigate("/categorie");
      });
  };
  const taskTitleElement = useRef<HTMLInputElement>(null);
  const taskEventDateElement = useRef<HTMLInputElement>(null);
  const taskBodyElement = useRef<HTMLInputElement>(null);
  const taskImageElement = useRef<HTMLInputElement>(null);
  const taskUrlElement = useRef<HTMLInputElement>(null);
  const handleTaskSubmitForm = async (e: FormEvent) => {
    console.log("handleSubmitForm");
    e.preventDefault();
    console.log(taskTitleElement.current?.value);
    console.log(taskEventDateElement.current?.value);
    console.log(taskBodyElement.current?.value);
    console.log(taskImageElement.current?.value);
    console.log(taskUrlElement.current?.value);

    axios
      .post(
        "http://localhost:8085/api/tache",
        {
          title: taskTitleElement.current?.value,
          date_event: taskEventDateElement.current?.value,
          body: taskBodyElement.current?.value,
          image: taskImageElement.current?.value,
          url: taskUrlElement.current?.value,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log("response ", response.data);
        alert("Nouveau mémo crée!");
        navigate("/dashboard");
      });
  };

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
                type="text"
                  className="form-control"
                  id="nomCategorie"
                  placeholder="nom de la catégorie"
                  ref={titleElement}
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
                  type="file"
                  accept="image/*"
                  className="form-control"
                  id="image"
                  placeholder="image de la catégorie"
                  ref={ImageElement}
                />
                <label htmlFor='image' className=''></label>
              </div>
              <div>
                <Button variant='primary' onClick={handleClose}>
                <Button variant="primary" onClick={handleSubmitForm}>
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
                type="text"
                  className="form-control"
                  id="nomMemo"
                  placeholder="nom du mémo"
                  ref={taskTitleElement}
                />
                <label htmlFor='nomMemo' className=''></label>
              </div>
              <div>
                <input
                  className='form-control'
                  type='datetime-local'
                  id='eventDate'
                  className="form-control"
                  type="date"
                  id="eventDate"
                  placeholder="date de l'évènement"
                  ref={taskEventDateElement}
                />
                <label htmlFor='eventDate' className=''></label>
              </div>
              <div>
                <textarea
                  className='form-control'
                  id='bodyMemo'
                  placeholder='description'
                <input
                type="textarea"
                  className="form-control"
                  id="bodyMemo"
                  placeholder="description"
                  ref={taskBodyElement}
                />
                <label htmlFor='bodyMemo' className=''></label>
              </div>
              <div>
                <input
                  type='file'
                  className='form-control'
                  id='memoImage'
                  placeholder='image du mémo'
                  type="file"
                  className="form-control"
                  id="memoImage"
                  placeholder="image du mémo"
                  ref={taskImageElement}
                />
                <label htmlFor='memoImage' className=''></label>
              </div>
              <div>
                <input
                  className='form-control'
                  type='url'
                  id='url'
                  placeholder='lien internet'
                
                  className="form-control"
                  type="url"
                  id="url"
                  placeholder="lien internet"
                  ref={taskUrlElement}
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
                {/* <input
                  className="form-control"
                  id="memoCategory"
                  placeholder="Catégorie du mémo, futur menu deroulant"
                /> */}
                <label htmlFor="memoCategory" className=""></label>
              </div>

              <div>
                <Button variant='primary' onClick={handleClose}>
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

export default AddBtn;
