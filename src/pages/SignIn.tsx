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
import { FormEvent, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
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
      .post('http://localhost:8085/api/auth/login', {
        pseudo: emailElement.current?.value,
        password: passwordElement.current?.value,
      })

      .then((response: AxiosResponse) => {
        const token = response.data.token;
        // Set le token dans le localstorage
        localStorage.setItem('token', token);
        console.log('response ', response.data);
        alert('Bon retour parmi nous!');
        navigate('/dashboard');
      });

    // .then((response: AxiosResponse<{ data: any }>) => {
    //   console.log('response ', response.data);
    //   alert('vous êtes connecté!');
    //   navigate('/dashboard');
    // });
    // try {
    //   const response = await SignUp.post('/sign');
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <div
    // style={{
    //   backgroundColor: '#ABCDEF',
    //   // overflow: 'hidden',
    // }}
    >
      <Navbar />
      <MDBContainer
        // className="my-"
        style={{
          margin: '39px auto',
        }}
      >
        <MDBCard>
          <MDBRow
            className="g-0 d-flex align-items-center"
            style={{
              backgroundColor:
                // 'rgba(180, 200, 200, 0.73)'
                'black',
            }}
          >
            <MDBCol
              md="4"
              style={{
                height: '25.6rem',
              }}
            >
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                alt="phone"
                className="rounded-t-5 rounded-tr-lg-0"
                fluid
                style={{
                  height: '25.6rem',
                }}
              />
            </MDBCol>

            <MDBCol md="8">
              <h1 style={{ textAlign: 'center', color: '#806d42' }}>
                Connectez vous
              </h1>
              <MDBCardBody
                className="form-floating mt-1"
                style={{ color: 'white' }}
              >
                <MDBInput
                  wrapperClass="mb-1"
                  label="Email"
                  id="form1"
                  type="email"
                  className="form-control"
                  placeholder="email@exemple.com"
                  inputRef={emailElement}
                />
                <MDBInput
                  wrapperClass="mb-1"
                  label="mot de passe"
                  id="form2"
                  type="password"
                  className="form-control"
                  placeholder="mot de passe"
                  inputRef={passwordElement}
                />

                <div className="d-flex justify-content-between mx-1 mb-1">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Remember me"
                  />
                  <a href="!#" style={{ color: 'black' }}>
                    Forgot password?
                  </a>
                </div>

                <MDBBtn
                  className="mb-1 w-100"
                  style={{ height: '40px'}}
                  onClick={handleSubmitForm}
                >
                  Connexion{''}
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
      <div style={{ position: 'relative', width: '100%', bottom: '0' }}>
        <Footer />
      </div>
    </div>
  );
};
