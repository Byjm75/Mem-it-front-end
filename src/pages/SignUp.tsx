import axios, { AxiosResponse } from 'axios';
import {
  MDBContainer,
  MDBCard,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterConnect } from '../components/FooterConnect';
import { Navbar } from '../components/Navbar';

export const SignUp = () => {
  const [isRegister, setIsRegister] = useState<String>();
  const pseudoElement = useRef<HTMLInputElement>(null);
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);
  const ConfirmPasswordElement = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmitForm = async (e: FormEvent) => {
    console.log('handleSubmitForm');
    e.preventDefault();
    console.log(pseudoElement.current?.value);
    console.log(emailElement.current?.value);
    console.log(passwordElement.current?.value);
    console.log(ConfirmPasswordElement.current?.value);

    axios
      .post('http://localhost:8085/api/auth/register', {
        pseudo: pseudoElement.current?.value,
        email: emailElement.current?.value,
        password: passwordElement.current?.value,
        ConfirmPassword: ConfirmPasswordElement.current?.value,
      })
      .then((response: AxiosResponse<{ data: any }>) => {
        if (response.status) {
          setIsRegister('Compte crée');
          setTimeout(() => navigate('/signin'), 1000);
        }
      })
      .catch((error) => {
        if (error === '23505') setIsRegister('erreur dans le formulaire');
        console.log();
      });
  };

  return (
    <div>
      <Navbar />
      <MDBContainer className='my-2'>
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
                height: '29.4rem',
              }}
            >
              <MDBCardImage
                src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg'
                alt='phone'
                className='rounded-t-5 rounded-tr-lg-0'
                fluid
                style={{
                  height: '29.4rem',
                }}
              />
            </MDBCol>

            <MDBCol md='8'>
              <h1 style={{ textAlign: 'center', color: 'white' }}>
                Inscrivez vous
              </h1>
              <MDBCardBody
                className='form-floating mt-1'
                style={{ color: 'white' }}
              >
                <MDBInput
                  wrapperClass='mb-1'
                  id='form1'
                  label='Pseudo'
                  type='text'
                  className='form-control'
                  inputRef={pseudoElement}
                  placeholder='pseudo'
                />

                <MDBInput
                  wrapperClass='mb-1'
                  label='Email address'
                  id='form2'
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
                <MDBInput
                  wrapperClass='mb-1'
                  label='Confirmez mot de passe'
                  id='form2'
                  type='password'
                  className='form-control'
                  placeholder='confirmez mot de passe'
                  inputRef={ConfirmPasswordElement}
                />

                <div className='d-flex justify-content-between mx-1 mb-2'>
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
                  className='mb-2 w-100'
                  style={{ height: '40px' }}
                  onClick={handleSubmitForm}
                >
                  inscription {''}
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
        {isRegister === 'Compte crée' ? (
          <div className='alert alert-success' role='alert'>
            {isRegister}
          </div>
        ) : isRegister === 'erreur dans le formulaire' ? (
          <div className='alert alert-danger d-flex' role='alert'>
            {isRegister}
          </div>
        ) : (
          <div></div>
        )}
      </MDBContainer>
      <div style={{ height: '150px' }}></div>
      <FooterConnect />
    </div>
  );
};
