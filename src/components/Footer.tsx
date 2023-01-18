export const FooterConnect = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0',
        width: '100%',
        zIndex: '1',
        overflow: 'hidden',
      }}
    >
      <section className="">
        <footer
          className="text-center text-white"
          style={{ backgroundColor: '#111827', width: '100%' }}
        >
          <div className="container p-1 pb-0">
            <section className="" style={{ padding: '5px 0' }}>
              {/* <!-- Facebook --> */}
              <a
                className="btn btn-primary"
                style={{ backgroundColor: ' #3b5998', margin: '0 7px' }}
                href="https://www.facebook.com/"
                role="button"
              >
                Facebook
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-primary position-relative"
                data-mdb-ripple-unbound="true"
                style={{ backgroundColor: '#ac2bac', margin: '0 7px' }}
                href="https://www.instagram.com/"
                role="button"
              >
                Instagram
                <i className="fab fa-instagram"></i>
              </a>

              {/* <!-- Twitter --> */}
              <a
                className="btn btn-primary position-relative"
                data-mdb-ripple-unbound="true"
                style={{ backgroundColor: '#55acee', margin: '0 7px' }}
                href="https://twitter.com/"
                role="button"
              >
                Twitter <i className="fab fa-twitter ms-1"></i>
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
