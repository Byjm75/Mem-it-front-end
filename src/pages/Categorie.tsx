import { useEffect } from 'react';
import CardCategory from '../components/CardCategory';
import CardPlus from '../components/CardPlus';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import ToolsBar from '../components/ToolsBar';
import { useState } from 'react';
import axios from 'axios';

export interface Categories {
  id: string;
  title: string;
  image: string;
  favoris: string;
}

const Categorie = () => {
  const [listCatDisplayed, setListCatDisplayed] = useState<Categories[]>(
    []
  );

  useEffect(() => {
    axios
      .get('http://localhost:8085/api/categorie', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((res) => {
        console.log(res)
        setListCatDisplayed(res.data);
      })
      
      ;
  }, []);
  return (
    <div
      style={
        {
          // width: '100%',
          // position: 'sticky',
          // top: '0',
          // overflow: 'hidden',
          // zIndex: '1',
          // height: '100vh',
        }
      }
    >
      <div
        style={{
          width: '100%',
          position: 'sticky',
          top: '0',
          overflow: 'hidden',
          zIndex: '1',
        }}
      >
        <ToolsBar />
      </div>
      <div
        style={{
          display: 'flex',
          // height: '100vh',
          // position: 'fixed',
          // overflow: 'hidden',
          // zIndex: '1',
        }}
      >
        <div
          // style={{ position: 'fixed', zIndex: '1', overflow: 'hidden' }}
          style={{
            top: '5.5em',
            display: 'flex',
            position: 'fixed',
            overflow: 'hidden',
            zIndex: '1',
          }}
        >
          <Sidebar />
        </div>
        <div
          // className="col-3"
          style={{ width: '64%', margin: '0 auto' }}
          // className="col-md-8 offset-md-2 "
        >
          {/* < Searchbar/> */}

          <div
            style={{
              width: '100%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'flex-end',
              margin: '10px 0 0 ',
            }}
          >
            <h1
              style={{
                width: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'flex-end',
                margin: '10px 0 0 ',
                color: '#007872',
                fontWeight: 'bold',
              }}
            >
              Catégorie{' '}
            </h1>
          </div>
          <hr />
          <div className="card">
            <div className="card-header">
              <div
                className="card-tools row"
                style={{ display: 'flex', justifyContent: 'space-around' }}
              >
                {/* {listCatDisplayed ?(
                 <ul>
                   
                 {listCatDisplayed.map((categorie, i) => (
                  
                    <li key={i}>
                      {categorie.title}
                    </li>)
                 )
                 }
                 
                 </ul>
                 )
                } */}
                <div>
                  
                    
                      {listCatDisplayed.map((categorie) => (
                        <li key={categorie.id}>
                          <CardCategory categoryAffich ={categorie}/>
                        </li>
                        
                      ))}{" "}
                   
                  </div>
                    
                    
                  
               {/* <CardPlus />
            <CardPlus />
            <CardPlus />
            <CardPlus />
            <CardPlus />
            <CardPlus />
            <CardPlus /> */}

                              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          position: 'fixed',
          bottom: '0',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <Footer />
      </div> */}
      <div style={{ marginTop: '60px' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Categorie;
