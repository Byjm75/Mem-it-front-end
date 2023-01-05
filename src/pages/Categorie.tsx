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
    // style={{
    //   width: '100%',
    //   position: 'sticky',
    //   top: '0',
    //   overflow: 'hidden',
    //   zIndex: '1',
    // }}
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
          // position: 'fixed',
          // overflow: 'hidden',
          // zIndex: '1',
        }}
      >
        <div
          // style={{ position: 'fixed', zIndex: '1', overflow: 'hidden' }}
          style={{
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
            {/* <img
              className="col-3"
              src="../assets/profile-icon-png-917.png"
              alt="profile"
              style={{ width: '5em', margin: '5px 25px 0' }}
            /> */}
            <h1
              // style={{
              //   color: 'lightslategrey',
              //   fontWeight: 'bold',
              // }}
              style={{
                width: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'flex-end',
                margin: '10px 0 0 ',
                // padding: '5px 15px 7px',
                color: '#007872',
                fontWeight: 'bold',
                // border: '1px solid lightslategrey',
                // borderRadius: '5px',
                // backgroundColor: 'lightblue',
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
                    
                    
                  
              
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <div style={{ position: 'sticky', bottom: '0',overflow:'hidden',display:'flex' }}>
        <Footer />
      </div> */}
      <div style={{ marginTop: '30px' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Categorie;
