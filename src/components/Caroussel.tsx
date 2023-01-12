
export const Carroussel = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel slide"
      data-bs-ride="carousel"
      
    >
      <div className='carousel-indicators'>
        <button
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide-to='0'
          className='active'
          aria-current='true'
          aria-label='Slide 1'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide-to='1'
          aria-label='Slide 2'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide-to='2'
          aria-label='Slide 3'
        ></button>
      </div>
      <div className='carousel-inner'>
        <div className='carousel-item active' data-bs-interval='6000'>
          <img
            src="/assets/Accueil-MEM-IT.jpg"
            className="d-block w-100"
            alt="accueil"
            // className="d-block w-100"
            // alt="..."
            style={{
              borderRadius: '0px 75px 20px',
            }}
          />
          <div className='carousel-caption d-none d-md-block'>
            <h4 style={{ color: 'white' }}>Gérer votre temps libre</h4>
          </div>
        </div>
        <div className='carousel-item' data-bs-interval='3000'>
          <img
            src='./assets/sports.jpg'
            className='d-block w-100 '
            alt="Louis qui fait de l'escalade"
            style={{
              borderRadius: '0px 75px 20px',
            }}
          />
          <div className='carousel-caption d-none d-md-block'>
            <h3 style={{ color: 'white' }}>Gérer votre temps libre</h3>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            src='/assets/escalade.jpg'
            className='d-block w-100 '
            alt="phot de l'escalade"
            style={{
              borderRadius: '0px 75px 20px',
            }}
          />
          <div className='carousel-caption d-none d-md-block'>
            <h3 style={{ color: 'white' }}>Gérer votre temps libre</h3>
          </div>
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleDark'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleDark'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};


