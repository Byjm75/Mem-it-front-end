import React from 'react';

export const FooterConnect = () => {
  return (
    <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
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
            <section className="">
              {/* <!-- Facebook --> */}
              <a
                className="btn btn-primary"
                style={{ backgroundColor: ' #3b5998', margin: '0 10px' }}
                href="https://www.facebook.com/"
                role="button"
              >
                Facebook
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
                Instagram
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
            © 2023 Copyright: Team MEM-IT
          </div>
        </footer>
      </section>
    </div>
  );
};
