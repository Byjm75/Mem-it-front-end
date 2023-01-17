import axios, { AxiosResponse } from 'axios';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { Footer } from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import { ToolsBar } from '../components/ToolsBar';
import jwtDecode from 'jwt-decode';
import { DecodTokenType, UserData } from '../interface/Interface';
import { useNavigate } from 'react-router-dom';

export const Profil = () => {
  const [userToken, setUserToken] = useState<UserData>();
  const navigate = useNavigate();
  const pseudoElement = useRef<HTMLInputElement>(null);
  const ImageProfilElement = useRef<HTMLInputElement>(null);
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      const decodToken: DecodTokenType = jwtDecode(accessToken);
      console.log('Token décodé page Profil:', decodToken);
      setUserToken(decodToken.utilisateur);
    }
  }, []);

  const handleSubmitForm = async (e: FormEvent) => {
    console.log('handleSubmitForm');
    e.preventDefault();
    console.log(pseudoElement.current?.value);
    console.log(emailElement.current?.value);
    console.log(passwordElement.current?.value);
    console.log(ImageProfilElement.current?.value);

    const accessToken = localStorage.getItem('token');
    axios
      .patch(
        `http://localhost:8085/api/utilisateur/${userToken?.id}`,
        {
          pseudo: pseudoElement.current?.value,
          email: emailElement.current?.value,
          password: passwordElement.current?.value,
          ImageProfilElement: ImageProfilElement.current?.value,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log('response ', response.data);
        alert('Profil mis à jour!');
        navigate('/dashboard');
        window.location.reload();
      });
  };
  const deleteAccount = async () => {
    axios
      .delete(`http://localhost:8085/api/utilisateur/${userToken?.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log('response ', response.data);
        alert('Votre compte a été supprimé!');
        navigate('/signup');
        window.location.reload();
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
        <div style={{ height: '77px' }}></div>
      </div>
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
          className="container rounded bg- mt-5 mb-5 "
          style={{
            display: 'flex',
            backgroundColor: 'black',
            justifyContent: 'center',
            width: '62%',
            marginLeft: '20rem',
          }}
        >
          <div className="row">
            <div className="col-md-12 border-right">
              <div className="p-0 py-1">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h4 className="text-right" style={{ color: '#007872' }}>
                    Modifier profil
                  </h4>
                </div>

                <div className="row mt-3" style={{ display: 'flex' }}>
                  <div className="col-md-4 border-right">
                    <img
                      width="100%"
                      src="../assets/profile-icon-png-917.png"
                      alt="profil"
                    />
                  </div>
                  <div className="col-md-8">
                    <label className="labels" style={{ color: '#007872' }}>
                      Pseudo
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="pseudo"
                      ref={pseudoElement}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels" style={{ color: '#007872' }}>
                      Adresse mail
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="modifier email"
                      ref={emailElement}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels" style={{ color: '#007872' }}>
                      Mot de passe
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="modifier mot de passe"
                      ref={passwordElement}
                    />
                  </div>
                </div>
                <div className="row" style={{ display: 'flex' }}>
                  <div className="column mt-3 col-6" style={{ width: '100%' }}>
                    <div className="col-md-12">
                      <label className="labels" style={{ color: '#007872' }}>
                        Image de profil
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        placeholder="image de profil"
                        ref={ImageProfilElement}
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
                        backgroundColor: '#806d42',
                        borderColor: 'white',
                      }}
                    >
                      Sauvegarder modifications
                    </button>
                  </div>
                  <div>
                    <button
                      className='delete button'
                      onClick={() => {
                        const confirmBox = window.confirm(
                          'Voulez-vous vraiment supprimer votre compte?'
                        );
                        if (confirmBox === true) {
                          deleteAccount();
                        }
                      }}
                    >
                      Supprimer mon compte
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
        <div style={{ height: '15px' }}></div>

        <Footer />
      </div>
    </div>
  );
};
