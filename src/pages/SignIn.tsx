import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import { FormEvent, useRef, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmitForm = async (e: FormEvent) => {
    console.log('handleSubmitForm');
    e.preventDefault();
    console.log(emailElement.current?.value);
    console.log(passwordElement.current?.value);

    axios
      .post('http://51.83.40.58:8082/api/auth/login', {
        email: emailElement.current?.value,
        password: passwordElement.current?.value,
      })
      .then((response: AxiosResponse) => {
        const token = response.data.accessToken;
        if (token) {
          localStorage.setItem('token', token);
          alert('Authentification réussie');
          setTimeout(() => navigate('/dashboard'), 1000);
        }
      })

      .catch(() => {
        alert('Combinaison adresse mail/ mot de passe non trouvée');
        window.location.reload();
      });
  };

  return (
    <div>
      <Navbar />
      <MDBContainer
        style={{
          marginTop: '3rem',
        }}
      >
        <MDBCard>
          <MDBRow
            className='g-0 d-flex align-items-center'
            style={{
              backgroundColor: 'black',
            }}
          >
            <MDBCol
              md='4'
              style={{
                height: '25.6rem',
              }}
            >
              <MDBCardImage
                src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg'
                alt='phone'
                className='rounded-t-5 rounded-tr-lg-0'
                fluid
                style={{
                  height: '25.6rem',
                }}
              />
            </MDBCol>

            <MDBCol md='8'>
              <h1 style={{ textAlign: 'center', color: 'white' }}>
                Connectez vous
              </h1>
              <MDBCardBody
                className='form-floating mt-1'
                style={{ color: 'white' }}
              >
                <MDBInput
                  wrapperClass='mb-1'
                  label='Email'
                  id='form1'
                  type='email'
                  className='form-control'
                  placeholder='email@exemple.com'
                  inputRef={emailElement}
                />
                <MDBInput
                  wrapperClass='mb-1'
                  label='mot de passe'
                  id='form2'
                  type='password'
                  className='form-control'
                  placeholder='mot de passe'
                  inputRef={passwordElement}
                />

                <div className='d-flex justify-content-between mx-1 mb-1'>
                  <MDBCheckbox
                    name='flexCheck'
                    value=''
                    id='flexCheckDefault'
                    label='Remember me'
                  />
                  <a href='!#' style={{ color: 'black' }}>
                    Forgot password?
                  </a>
                </div>

                <MDBBtn
                  className='mb-1 w-100'
                  style={{ height: '40px' }}
                  onClick={handleSubmitForm}
                >
                  Connexion{''}
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>

      <div style={{ height: '150px' }}></div>

      <Footer />
    </div>
  );
};
