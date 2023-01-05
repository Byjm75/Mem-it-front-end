import axios, { AxiosResponse } from 'axios';
import React, { FormEvent, useRef } from 'react';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import ToolsBar from '../components/ToolsBar';
import { useNavigate } from 'react-router-dom';

const CreateCategory = () => {
    const titleElement = useRef<HTMLInputElement>(null);
  const ImageElement = useRef<HTMLInputElement>(null);
  const favElement = useRef<HTMLInputElement>(null);
  
const navigate=useNavigate()
  const handleSubmitForm = async (e: FormEvent) => {
    console.log('handleSubmitForm');
    e.preventDefault();
    console.log(titleElement.current?.value);
    console.log(ImageElement.current?.value);
    console.log(favElement.current?.value);
    
    axios
      .post('http://localhost:8085/api/categorie', 
       
       { title: titleElement.current?.value,
        favori: favElement.current?.value,
        image: ImageElement.current?.value,
  },
   {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log('response ', response.data);console.log(response, 'res')
        alert('Nouvelle catégorie créée!');
        navigate('/categorie')
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
          <div className="row">
            <div className="col-md-10 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="text-right" style={{ color: '#007872' }}>
                    Creer une catégorie
                  </h4>
                </div>

                <div className="row mt-3" style={{ display: 'flex' }}>
                  <div className="col-md-4 border-right">
                  
                  </div>
                  <div className="col-md-8">
                    <label className="labels" style={{ color: '#007872' }}>
                      Titre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Titre"
                      ref={titleElement}
                     
                    />
                  </div>
                </div>
                <div className="row" style={{ display: 'flex' }}>
                  <div className="column mt-3 col-6" style={{ width: '100%' }}>
                    <div className="col-md-12">
                      <label className="labels" style={{ color: '#007872' }}>
                        Image de catégorie
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        placeholder="image de catégorie"
                        ref={ImageElement}
                        
                      />
                    </div>
                  </div>
                  <div
                    className="mt-4 text-center col-12"
                    style={{
                      marginRight: '0',
                      display: 'flex',
                      justifyContent: 'end',
                    }}
                  >
                    <button
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
                    </button>
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
        <Footer />
      </div>
      </div>
      )}

export default CreateCategory;