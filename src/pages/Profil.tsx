import axios, { AxiosResponse } from 'axios';
import { FormEvent, useRef } from 'react';

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
      .patch('http://localhost:8081/api/auth/update', {
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
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="../assets/profile-icon-png-917.png"
                alt="profil"
              />
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Modifier profil</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Pseudo</label>
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
                  <label className="labels">Image de profil</label>
                  <input
                    type="file"
                    className="form-control"
                    placeholder="image de profil"
                    ref={ImageProfilElement}
                    value=""
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Adresse mail</label>
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
                  <label className="labels">Mot de passe</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="modifier mot de passe"
                    ref={passwordElement}
                    value=""
                  />
                </div>
              </div>
              <div className="row mt-3"></div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                  onClick={handleSubmitForm}
                >
                  Sauvegarder modifications
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
