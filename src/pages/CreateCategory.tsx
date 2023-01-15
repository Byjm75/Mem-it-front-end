import axios, { AxiosResponse } from 'axios';
import React, { useRef, useState } from 'react';
import { ToolsBar } from '../components/ToolsBar';
import { useNavigate } from 'react-router-dom';
import { blob } from 'stream/consumers';
import { FooterConnect } from '../components/FooterConnect';
import { Sidebar } from '../components/Sidebar';
// import sidebar from '../components/Sidebar';

export const CreateCategory = () => {
  const navigate = useNavigate();

  const titleElement = useRef<HTMLInputElement>(null);

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
        });
    }
    navigate('/dashboard');
    window.location.reload();
  };

  return (
    <div>
      <div
        style={{
          width: '100%',
          position: 'sticky',
          top: '0',
          overflow: 'hidden',
          zIndex: '1',
        }}
      >
        <ToolsBar
          onSearch={function (userInput: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>{' '}
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'fixed',
            overflow: 'hidden',
            zIndex: '1',
          }}
        >
          <Sidebar />
        </div>

        <div
          className="container rounded bg-4 "
          style={{
            display: 'flex',
            backgroundColor: 'black',
            justifyContent: 'center',
            width: '62%',
            marginLeft: '20rem',
            marginTop: '10rem',
          }}
        >
          <div className=" row py-6">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-10 border-right">
                  <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h4
                        className="text-right"
                        style={{ color: '#806d42', fontWeight: 'bold' }}
                      >
                        Créer votre catégorie
                      </h4>
                    </div>
                    <label
                      className="labels"
                      style={{ color: '#806d42', fontWeight: 'bold' }}
                    >
                      Titre de la catégorie
                    </label>
                    <div className="input-group mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Titre de la catégorie"
                        ref={titleElement}
                      />
                    </div>
                    <label
                      className="labels"
                      style={{ color: '#806d42', fontWeight: 'bold' }}
                    >
                      Choisissez votre fichier
                    </label>
                    <div className="input-group mb-3">
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

                    <button
                      className="btn btn-primary profile-button col-md-12"
                      type="button"
                      style={{
                        padding: '5px',
                        backgroundColor: '#806d42',
                        borderColor: 'white',
                      }}
                    >
                      Sauvegarder modifications
                    </button>
                  </div>
                </div>
              </div>
            </form>

            <div className="row" style={{ display: 'flex' }}>
              <div className="column mt-3 col-6" style={{ width: '100%' }}>
                <div className="col-md-12"></div>
              </div>
              <div
                className="mt-4 text-center col-12"
                style={{
                  marginRight: '0',
                  display: 'flex',
                  justifyContent: 'end',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: '30px',

          bottom: '0',
          width: '100%',
        }}
      >
        <FooterConnect />
      </div>
    </div>
  );
};
