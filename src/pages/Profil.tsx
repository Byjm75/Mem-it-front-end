import axios, { AxiosResponse } from 'axios';
import { FormEvent, useRef } from 'react';
import Footer from '../components/Footer';
import ToolsBar from '../components/ToolsBar';


const Profil = () => {
  const pseudoElement = useRef<HTMLInputElement>(null);
  const ImageProfilElement = useRef<HTMLInputElement>(null);
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmitForm = async (e: FormEvent) => {
    console.log('handleSubmitForm');
    e.preventDefault();
    console.log(pseudoElement.current?.value);
    console.log(emailElement.current?.value);
    console.log(passwordElement.current?.value);
    console.log(ImageProfilElement.current?.value);
    axios
      .patch('http://localhost:8090/api/auth/update', {
        pseudo: pseudoElement.current?.value,
        email: emailElement.current?.value,
        password: passwordElement.current?.value,
        ImageProfilElement: ImageProfilElement.current?.value,
      })
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log('response ', response.data);
        alert('Profil mis à jour!');
      });
  };
  return (
    <div>
      <ToolsBar />
      {/* // style={{border:'solid 2px #9AAEB4', width:'70%',  margin:' 40px auto'}} */}

      <div
        className="container rounded bg-' mt-5 mb-5 "
        style={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          width: '80%',
        }}
      >
        <div className="row">
          <div className="col-md-2 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                // className="rounded-circle mt-5"
                width="100px"
                src="../assets/profile-icon-png-917.png"
                alt="profil"
              />
            </div>
          </div>
          <div className="col-md-10 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right" style={{ color: '#007872' }}>
                  Modifier profil
                </h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels" style={{ color: '#007872' }}>
                    Pseudo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="pseudo"
                    ref={pseudoElement}
                    value=""
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
                    value=""
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
                    value=""
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
                      value=""
                    />
                  </div>
                </div>
                <div
                  className="mt-4 text-center col-6"
                  style={{
                    width: '80%',
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
                      // width: '100%',
                      padding: '3px',
                      backgroundColor: '#007872',
                      borderColor: '#007872',
                    }}
                  >
                    Sauvegarder modifications
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5"></div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Profil;
