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
import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';

export const SignUp = () => {
  const pseudoElement = useRef<HTMLInputElement>(null);
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);
  const ConfirmPasswordElement = useRef<HTMLInputElement>(null);
  // const imageElement = useRef<HTMLInputElement>(null);
  // Permet de naviguer directement sur une autre page après l'inscription
  const navigate = useNavigate();

  const handleSubmitForm = async (e: FormEvent) => {
    console.log('handleSubmitForm');
    e.preventDefault();
    console.log(pseudoElement.current?.value);
    console.log(emailElement.current?.value);
    console.log(passwordElement.current?.value);
    console.log(ConfirmPasswordElement.current?.value);
    axios
      .post('http://localhost:8081/api/auth/register', {
        pseudo: pseudoElement.current?.value,
        email: emailElement.current?.value,
        password: passwordElement.current?.value,
        ConfirmPassword: ConfirmPasswordElement.current?.value,
      })
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log('response ', response.data);
        alert('nouveau compte crée!');
        navigate('/signin');
      });
    // try {
    //   const response = await SignUp.post('/sign');
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <div>
      <Navbar />
      <MDBContainer className="my-2">
        <MDBCard>
          <MDBRow
            className="g-0 d-flex align-items-center"
            style={{
              backgroundColor: 'rgba(180, 200, 200, 0.73)',
            }}
          >
            <MDBCol
              md="4"
              style={{
                height: '29.4rem',
              }}
            >
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                alt="phone"
                className="rounded-t-5 rounded-tr-lg-0"
                fluid
                style={{
                  height: '29.4rem',
                }}
              />
            </MDBCol>

            <MDBCol md="8">
              <h1 style={{ textAlign: 'center', color: 'white' }}>
                Inscrivez vous
              </h1>
              <MDBCardBody
                className="form-floating mt-1"
                style={{ color: 'white' }}
              >
                {/* <label htmlFor="pseudo">Pseudo</label> */}
                <MDBInput
                  wrapperClass="mb-1"
                  id="form1"
                  label="Pseudo"
                  type="text"
                  className="form-control"
                  inputRef={pseudoElement}
                  placeholder="pseudo"
                />

                <MDBInput
                  wrapperClass="mb-1"
                  label="Email address"
                  id="form2"
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
                <MDBInput
                  wrapperClass="mb-1"
                  label="Confirmez mot de passe"
                  id="form2"
                  type="password"
                  className="form-control"
                  placeholder="confirmez mot de passe"
                  inputRef={ConfirmPasswordElement}
                />

                <div className="d-flex justify-content-between mx-1 mb-2">
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
                  className="mb-2 w-100"
                  style={{ height: '40px' }}
                  onClick={handleSubmitForm}
                >
                  inscription {''}
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
      <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>
        <Footer />
      </div>
    </div>
  );
};
