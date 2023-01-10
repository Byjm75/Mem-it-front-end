import axios, { AxiosResponse } from 'axios';
import React, { FormEvent, useRef } from 'react';
import Footer from '../components/Footer';
import FooterConnect from '../components/FooterConnect';
import { Sidebar } from '../components/Sidebar';
import ToolsBar from '../components/ToolsBar';

const CreateTask = () => {
  const titleElement = useRef<HTMLInputElement>(null);
  const eventDateElement = useRef<HTMLInputElement>(null);
  const bodyElement = useRef<HTMLInputElement>(null);
  const imageElement = useRef<HTMLInputElement>(null);
  const urlElement = useRef<HTMLInputElement>(null);

  const handleSubmitForm = async (e: FormEvent) => {
    console.log('handleSubmitForm');
    e.preventDefault();
    console.log(titleElement.current?.value);
    console.log(eventDateElement.current?.value);
    console.log(bodyElement.current?.value);
    console.log(imageElement.current?.value);
    console.log(urlElement.current?.value);

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
        <ToolsBar />
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
              <div className='p-3 py-4'>
                <div className='d-flex justify-content-between align-items-center mb-4'>
                  <h4 className='text-right' style={{ color: '#007872' }}>
                    Creer un mémo
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
                <div className='col-md-8'>
                  <label className='labels' style={{ color: '#007872' }}>
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
              <div className='row py-4' style={{ display: 'flex' }}>
                <div className='column mt-3 col-6 ' style={{ width: '100%' }}>
                  <div className='col-md-12 '>
                    <label className='labels' style={{ color: '#007872' }}>
                      Image de profil
                    </label>
                    <input
                      type='file'
                      className='form-control'
                      placeholder='image de profil'
                      ref={imageElement}
                    />
                  </div>
                </div>

                <div className='row' style={{ display: 'flex' }}>
                  <div className='column mt-3 col-6' style={{ width: '100%' }}>
                    <div className='col-md-12'>
                      <label className='labels' style={{ color: '#007872' }}>
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
                        <label className='labels' style={{ color: '#007872' }}>
                          Description
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

export default CreateTask;
