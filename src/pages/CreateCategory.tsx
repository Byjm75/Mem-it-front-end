import axios, { AxiosResponse } from 'axios';
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { ToolsBar } from '../components/ToolsBar';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { blob } from 'stream/consumers';
import { FooterConnect } from '../components/FooterConnect';
import SideBBar from '../components/SideBBar';

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
    navigate('/categorie');
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
          <SideBBar />
        </div>
        <div
          className='container rounded bg-4 mt-5 mb-5 '
          style={{
            display: 'flex',
            backgroundColor: 'black',
            justifyContent: 'center',
            width: '62%',
          }}
        >
          <div className='row'>
            <div className='col-md-10 border-right'>
              <div className='p-3 py-5'>
                <div className='d-flex justify-content-between align-items-center mb-4'>
                  <h4 className='text-right' style={{ color: '#007872' }}>
                    Creer une catégorie
                  </h4>
                </div>

                <div className='row mt-3' style={{ display: 'flex' }}>
                  <div className='col-md-4 border-right'></div>
                  <div className='col-md-8'>
                    {/* <label className="labels" style={{ color: '#007872' }}>
                      Titre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Titre"
                      ref={titleElement}
                     
                    /> */}
                    <form onSubmit={handleSubmit}>
                      <input type='text' ref={titleElement} />
                      <label htmlFor='file'>Select image:</label>
                      <input
                        type='file'
                        id='file'
                        onChange={handleFileChange}
                      />
                      <button type='submit'>Upload image</button>
                    </form>
                  </div>
                </div>
                <div className='row' style={{ display: 'flex' }}>
                  <div className='column mt-3 col-6' style={{ width: '100%' }}>
                    <div className='col-md-12'></div>
                  </div>
                  <div
                    className='mt-4 text-center col-12'
                    style={{
                      marginRight: '0',
                      display: 'flex',
                      justifyContent: 'end',
                    }}
                  >
                    {/* <button
                      className="btn btn-primary profile-button col-md-12"
                      type="button"
                      onClick={handleSubmitForm}
                      style={{
                        padding: '5px',
                        backgroundColor: '#007872',
                        borderColor: 'white',
                      }}
                    >
                      Sauvegarder modifications
                    </button> */}
                  </div>
                </div>
              </div>
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

function setImage(arg0: string) {
  throw new Error('Function not implemented.');
}
