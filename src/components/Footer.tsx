import React from 'react';

export const Footer = () => {
  return (
    <div>
      <section className="">
        <footer
          className="text-center text-white"
          style={{
            backgroundColor: '#111827',
            position: 'fixed',
            bottom: '0',
            width: '100%',
          }}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
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
              </p>
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

export default Footer;
