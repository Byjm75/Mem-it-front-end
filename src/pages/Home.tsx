// import { Caroussel } from '../components/Caroussel';
import Caroussel from "../components/Caroussel";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          position: "sticky",
          top: "0",
          overflow: "hidden",
          zIndex: "1",
        }}
      >
        <Navbar />
      </div>
      <div className='container' style={{ margin: "auto" }}>
        <div
          style={{
            width: "100%",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            marginBottom: "20px",
            margin: "10px auto",
            padding: "0px",
            textAlign: "center",
            color: "cadetblue",
          }}
        >
          {/* <hr style={{ color: '#EDC26A' }} />
          <h1
            style={{
              fontSize: '50px',
              margin: '15px auto',
              backgroundColor: '#EDC26A',
              padding: '10px',
              color: 'white',
              borderColor: '#EDC26A',
              borderRadius: '15px 40px',
            }}
          >
            MEM-IT
          </h1>
          <hr style={{ color: '#EDC26A' }} /> */}
          <div
            className='card  row'
            style={{
              width: "100%",
              // margin: '5px auto',
              padding: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              // borderColor: '#EDC26A',
              // borderRadius: '15px',
            }}
          >
            <div className='col-sm-6'>
              <h1
                style={{
                  fontSize: "40px",
                  margin: "0 auto",
                  backgroundColor: "#9AAEB4",
                  padding: "10px",
                  color: "white",
                  borderColor: "#EDC26A",
                  borderRadius: "70px 15px 70px 0",
                }}
              >
                MEM-IT
              </h1>

              <Caroussel />
            </div>
            <div className='col-sm-6'>
              <div
                style={{
                  width: "100%",
                  fontSize: "20px",
                  textAlign: "justify",
                  padding: "15px",
                }}
              >
                <h2> Gérez toutes vos activités</h2>
                <p>
                  Prise en main facile et simplicité d'utilisation,{" "}
                  <span style={{ color: "#EDC26A" }}> MEM-IT </span>vous
                  accompagne au quotidien dans la gestion de de vos activités.
                  <br />
                  Vous gagnez du temps dans votre organisation et tout cela
                  <span style={{ color: "red" }}> gratuitement </span> bien sûr.
                </p>
                <hr />
                <div
                  className='space row'
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {/* <button
                    type="button"
                    className="btn btn-success"
                    style={{
                      // position: 'absolute',
                      // right: '1%',
                      // bottom: '1%',
                      borderRadius: '15px',
                      fontSize: '25px',
                      padding: '0px 30px',
                    }}
                  >
                    Demo
                  </button> */}

                  <button
                    type='button'
                    className='btn btn-danger col-sm-12'
                    style={{
                      // position: 'absolute',
                      // right: '0%',
                      fontSize: "30px",
                      padding: "0px 40px",

                      marginTop: "30px",
                      borderColor: "#EDC26A",
                      borderRadius: "15px",
                    }}
                  >
                    <a className='navbar-brand' href='/signup'>
                      Inscription
                    </a>{" "}
                  </button>
                  <button
                    type='button'
                    className='btn btn-success col-sm-12'
                    style={{
                      // position: 'absolute',
                      // right: '0%',
                      fontSize: "30px",
                      padding: "0px 40px",

                      marginTop: "30px",
                      borderColor: "#EDC26A",
                      borderRadius: "15px",
                    }}
                  >
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Caroussel /> */}
      <div style={{ position: "absolute", width: "100%", bottom: "0" }}>
        <Footer />
      </div>{" "}
    </div>
  );
};
