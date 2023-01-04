import React from 'react';

export const Footer = () => {
export const Footer = () => {
  return (
    <div>
      <section className="">
        {/*  <!-- Footer -->**/}
        <footer
          className="text-center text-white"
          style={{ backgroundColor: '#111827' }}
        >
          {/*    <!-- Grid container -->**/}
          <div className="container p-4 pb-0">
            {/*      <!-- Section: CTA --> **/}
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span
                  className="me-3"
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
            {/*    <!-- Section: CTA --> **/}
          </div>
          {/*   <!-- Grid container --> **/}
          {/*  <!-- Copyright --> **/}
          <div
            className="text-center p-3"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', height: '40px' }}
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
