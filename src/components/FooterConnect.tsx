import React from 'react';

export const FooterConnect = () => {
  return (
    <div style={{position:'fixed',bottom:'0', width:'100%'}}>
      <section className="">
        <footer
          className="text-center text-white"
          style={{ backgroundColor: '#111827' }}
        >
          <div
            className="container p-4 pb-0"
            // style={{
            // width:'90%'
            // }}
          >
            <section
              className=""

              //   style={{
              //     // width:'80%',
              //     display: 'flex',
              //     justifyContent: 'space-arround',
              //   }}
            >
              {/* <p className="d-flex justify-content-center align-items-center">
                <span
                  className="me-2"
                  style={{
                    color: 'white',
                  }}
                >
                  Rejoignez nous gratuitement
                </span>
                <button
                  type="button"
                  className="btn btn-outline-light btn-rounded"
                  style={{ backgroundColor: '#007872', borderColor: '#007872' }}
                >
                  Inscription!
                </button>
              </p> */}

              {/* <!-- Facebook --> */}
              <a
                className="btn btn-primary"
                style={{ backgroundColor: ' #3b5998', margin: '0 10px' }}
                href="https://www.facebook.com/"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
                {/* <span className="badge bg-danger ms-2">8</span> */}
              </a>
              {/* <!-- Instagram --> */}
              <a
                className="btn btn-primary position-relative"
                data-mdb-ripple-unbound="true"
                style={{ backgroundColor: '#ac2bac', margin: '0 10px' }}
                href="https://www.instagram.com/"
                role="button"
              >
                <i className="fab fa-instagram"></i>
                {/* <span className="badge bg-danger ms-2">8</span> */}
              </a>

              {/* <!-- Twitter --> */}
              <a
                className="btn btn-primary position-relative"
                data-mdb-ripple-unbound="true"
                style={{ backgroundColor: '#55acee', margin: '0 10px' }}
                href="https://twitter.com/"
                role="button"
              >
                Twitter <i className="fab fa-twitter ms-1"></i>
                {/* <span className="badge bg-danger ms-2">8</span> */}
              </a>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', height: '40px' }}
          >
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
};

