import axios, { AxiosResponse } from 'axios';
import React, { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterConnect } from '../components/FooterConnect';
import { ScrollCat } from '../components/ScrollCat';
import { Sidebar } from '../components/Sidebar';
import { ToolsBar } from '../components/ToolsBar';

export const CreateMemo = () => {
  const titleElement = useRef<HTMLInputElement>(null);
  const eventDateElement = useRef<HTMLInputElement>(null);
  const bodyElement = useRef<HTMLInputElement>(null);
  const imageElement = useRef<HTMLInputElement>(null);
  const urlElement = useRef<HTMLInputElement>(null);
  const catIdElement = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmitForm = async (e: FormEvent) => {
    console.log('handleSubmitForm');
    e.preventDefault();
    console.log(titleElement.current?.value);
    console.log(eventDateElement.current?.value);
    console.log(bodyElement.current?.value);
    console.log(imageElement.current?.value);
    console.log(urlElement.current?.value);
    console.log(catIdElement.current?.value);
    axios
      .post(
        'http://localhost:8085/api/tache',
        {
          title: titleElement.current?.value,
          date_event: eventDateElement.current?.value,
          body: bodyElement.current?.value,
          image: imageElement.current?.value,
          url: urlElement.current?.value,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log('response ', response.data);
        alert('Nouveau mémo crée!');
        navigate('/tache');
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
          className="container rounded bg-' mt-5 mb-5 "
          style={{
            display: 'flex',
            backgroundColor: 'black',
            justifyContent: 'center',
            width: '62%',
          }}
        >
          <div className='row py-4'>
            <div className='col-md-10 border-right'>
              <div className='p-3 py-4'>
                <div className='d-flex justify-content-between align-items-center mb-4'>
                  <h4 className='text-right' style={{ color: '#806d42',fontWeight:'bold' }}>
                    Créer un mémo
                  </h4>
                </div>
                <label className='labels' style={{ color: '#806d42',fontWeight:'bold' }}>
                  Catégorie de votre mémo
                </label>
                <ScrollCat />
                <div className='row' style={{ display: 'flex' }}>
                  <div className='column mt-3 col-6' style={{ width: '100%' }}>
                    <div className='col-md-12'>
                      <label className='labels' style={{ color: '#806d42',fontWeight:'bold' }}>
                        Titre de votre mémo
                      </label>
                      <input
                        type='url'
                        className='form-control'
                        placeholder='Titre'
                        ref={titleElement}
                      />
                    </div>
                  </div>

                  <div className='col-md-12 mt-4'>
                    <label className='labels' style={{ color: '#806d42',fontWeight:'bold' }}>
                      Date de votre évènement
                    </label>
                    <input
                      type='date'
                      className='form-control'
                      placeholder="Date de l'évènement"
                      ref={eventDateElement}
                    />
                  </div>
                </div>
                <div className='column mt-3 col-6 ' style={{ width: '100%' }}>
                  <div className='col-md-12 '>
                    <label className='labels' style={{ color: '#806d42',fontWeight:'bold' }}>
                      Image de votre profil
                    </label>
                    <input
                      type='file'
                      className='form-control'
                      placeholder='image de profil'
                      ref={imageElement}
                    />
                  </div>

                  <div className='row' style={{ display: 'flex' }}>
                    <div
                      className='column mt-3 col-6'
                      style={{ width: '100%' }}
                    >
                      <div className='col-md-12'>
                        <label className='labels' style={{ color: '#806d42',fontWeight:"bold" }}>
                          Lien internet
                        </label>
                        <input
                          type='url'
                          className='form-control'
                          placeholder='lien internet'
                          ref={urlElement}
                        />
                      </div>
                    </div>
                    <div className='row' style={{ display: 'flex' }}>
                      <div
                        className='column mt-3 col-6'
                        style={{ width: '100%' }}
                      >
                        <div className='col-md-12'>
                          <label
                            className='labels'
                            style={{ color: '#806d42',fontWeight:'bold' }}
                          >
                            Contenu
                          </label>
                          <input
                            type='textarea'
                            className='form-control'
                            placeholder='description'
                            ref={bodyElement}
                          />
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
                            backgroundColor: '#806d42',
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
        </div>
        <div style={{ height: '150px' }}></div>
        <FooterConnect />
      </div>
    </div>
  );
};
