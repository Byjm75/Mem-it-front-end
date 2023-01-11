import axios, { AxiosResponse } from 'axios';
import React, { FormEvent, useRef, useState } from 'react';
import {ToolsBar} from '../components/ToolsBar';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import FooterConnect from '../components/FooterConnect';

type State = string;

export const CreateCategory = () => {
  const [image, setImage] = useState<State>('');

  const titleElement = useRef<HTMLInputElement>(null);
  const ImageElement = useRef<HTMLInputElement>(null);
  const favElement = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const handleSubmitForm = async (e: FormEvent) => {
    console.log('handleSubmitForm');
    e.preventDefault();
    console.log(titleElement.current?.value);
    console.log(ImageElement.current?.value);
    console.log(favElement.current?.value);

    axios
      .post(
        'http://localhost:8085/api/categorie',

        {
          title: titleElement.current?.value,
          favori: favElement.current?.value,
          image: ImageElement.current?.value,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log('response ', response.data);
        console.log(response, 'res');
        alert('Nouvelle catégorie créée!');
        navigate('/categorie');
      });
  };

  const getBase64Image = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadend = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        if (!arrayBuffer) {
          reject(new Error('Failed to read file'));
        }
        const base64Image = Buffer.from(arrayBuffer).toString('base64');
        resolve(base64Image);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files?.[0];
    if (!files) {
      return;
    }
    const base64Image = await getBase64Image(files);
    setImage(base64Image);
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post(
        'https://httpbin.org/post',
        {
          image,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          maxContentLength: Infinity,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
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
        <ToolsBar onSearch={function (userInput: string): void {
          throw new Error('Function not implemented.');
        } } />
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
          className="container rounded bg-' mt-5 mb-5 "
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
                    <label className='labels' style={{ color: '#007872' }}>
                      Titre
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Titre'
                      ref={titleElement}
                    />
                  </div>
                </div>
                <div className='row' style={{ display: 'flex' }}>
                  <div className='column mt-3 col-6' style={{ width: '100%' }}>
                    <div className='col-md-12'>
                      <form onSubmit={handleSubmit}>
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
                  <div
                    className='mt-4 text-center col-12'
                    style={{
                      marginRight: '0',
                      display: 'flex',
                      justifyContent: 'end',
                    }}
                  >
                    <button
                      className='btn btn-primary profile-button col-md-12'
                      type='button'
                      onClick={handleSubmitForm}
                      style={{
                        padding: '5px',
                        backgroundColor: '#007872',
                        borderColor: 'white',
                      }}
                    >
                      Sauvegarder modifications
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '150px' }}></div>
      <FooterConnect />
    </div>
  );
};
