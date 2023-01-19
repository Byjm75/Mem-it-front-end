import axios, { AxiosResponse } from 'axios';
import React, { FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { ScrollCat } from '../components/ScrollCat';
import { Sidebar } from '../components/Sidebar';
import { ToolsBar } from '../components/ToolsBar';
import { Categories } from '../interface/Interface';

let userSelectCat: Categories ;

export const CreateMemo = () => {
  const titleElement = useRef<HTMLInputElement>(null);
  const eventDateElement = useRef<HTMLInputElement>(null);
  const bodyElement = useRef<HTMLTextAreaElement>(null);
  const urlElement = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSelectCategorie = (cat: Categories) => {
    userSelectCat = cat;
    if(!cat){userSelectCat.id=""}
    console.log('CreateMemo - catégorie sélectionnée : ', userSelectCat);
  };
  

  const handleSubmitForm = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(titleElement.current?.value);
    console.log(eventDateElement.current?.value);
    console.log(bodyElement.current?.value);
    console.log(urlElement.current?.value);
    // console.log(userSelectCat.title);
    if ((!userSelectCat)&&(!eventDateElement.current?.value)) {
  
  
      axios
        .post(
          'http://localhost:8085/api/tache',
          {
            title: titleElement.current?.value,
            body: bodyElement.current?.value,
            url: urlElement.current?.value,
            
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
          navigate('/memoUnCat')
          // if (userSelectCat) {
          //   navigate(`/memo/${userSelectCat.id}`);
          // } else {
          //   navigate('/memoUnCat');
          // }
        });
    } 
  if ((!userSelectCat)&&(eventDateElement.current?.value)) {
  
  
      axios
        .post(
          'http://localhost:8085/api/tache',
          {
            title: titleElement.current?.value,
            body: bodyElement.current?.value,
            url: urlElement.current?.value,
            date_event: eventDateElement.current?.value
            
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
          navigate('/memoUnCat')

          // if (userSelectCat) {
          //   navigate(`/memo/${userSelectCat.id}`);
          // } else {
          //   navigate('/memoUnCat');
          // }
        });
    }
    if ((userSelectCat)&&(!eventDateElement.current?.value)) {
  
  
      axios
        .post(
          'http://localhost:8085/api/tache',
          {
            title: titleElement.current?.value,
            body: bodyElement.current?.value,
            url: urlElement.current?.value,
            categorie_ : userSelectCat
            
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
          navigate(`/memo/${userSelectCat.id}`)

         
        });
    }
    if ((userSelectCat)&&(eventDateElement.current?.value)) {
  
  
      axios
        .post(
          'http://localhost:8085/api/tache',
          {
            title: titleElement.current?.value,
            body: bodyElement.current?.value,
            url: urlElement.current?.value,
            categorie_ : userSelectCat,
            date_event : eventDateElement.current?.value
            
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
          navigate(`/memo/${userSelectCat.id}`)

         
        });
    }
    if(!titleElement.current?.value){
      alert('un titre est obligatoire')
    }
  
  }

    return (
      <div>
        <div
          style={{
            width: '100%',
            position: 'sticky',
            top: '0',
            margin: 'auto',
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
            position: 'fixed',
            overflow: 'hidden',
            zIndex: '1',
          }}
        >
          <Sidebar />
        </div>
        <form onSubmit={handleSubmitForm}>
          <div
            className='container rounded bg- mt-5 mb-5 '
            style={{
              display: 'flex',
              backgroundColor: 'black',
              justifyContent: 'center',
              width: '62%',
            }}
          >
            <div className='row py-4  '>
              <div className='col-md-10 border-right'>
                <div className='p-3 py-4'>
                  <div className='d-flex justify-content-between align-items-center mb-4'>
                    <h4
                      className='text-right'
                      style={{ color: '#806d42', fontWeight: 'bold' }}
                    >
                      Créer votre mémo
                    </h4>
                  </div>
                  <ScrollCat onSelectCatTitle={handleSelectCategorie} />

                  <div className='row' style={{ display: 'flex' }}>
                    <div className='column mt-3 col-6' style={{ width: '100%' }}>
                      <div className='col-md-12'>
                        <label
                          className='labels'
                          style={{ color: '#806d42', fontWeight: 'bold' }}
                        >
                          Titre de votre mémo
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Titre'
                          ref={titleElement}
                        />
                      </div>
                    </div>

                    <div className='col-md-12 mt-4'>
                      <label
                        className='labels'
                        style={{ color: '#806d42', fontWeight: 'bold' }}
                      >
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
                  <div className='col-md-12'>
                    <label
                      className='labels'
                      style={{ color: '#806d42', fontWeight: 'bold' }}
                    >
                      Lien internet
                    </label>
                    <input
                      type='url'
                      className='form-control'
                      placeholder='lien internet'
                      ref={urlElement}
                    />
                  </div>
                  <div className='column mt-3 col-6 ' style={{ width: '100%' }}>
                    <div className='row' style={{ display: 'flex' }}>
                      <div
                        className='column mt-3 col-6'
                        style={{ width: '100%' }}
                      >
                        <div className='input-group'>
                          <textarea
                            className='form-control'
                            aria-label='Contenue de votre mémo'
                            placeholder='Contenu de votre mémo'
                            ref={bodyElement}
                          ></textarea>
                        </div>
                      </div>

                      <div
                        className='column mt-3 col-6'
                        style={{ width: '100%' }}
                      >
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
                            type='submit'
                            style={{
                              padding: '5px',
                              backgroundColor: '#806d42',
                              borderColor: 'white',
                            }}
                          >
                            Sauvegarder votre mémo
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div style={{ height: '150px' }}></div>
        <Footer />
      </div>
    );
  };

