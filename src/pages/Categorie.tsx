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
    <div className="position-sticky">
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
      <div style={{ width: '100%', display: 'flex' }}>
        <Sidebar />

        <div style={{ width: '80%', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1
              className="card-title"
              style={{ margin: '20px 0 0 20px', color: '#007872' }}
            >
              Catégories
            </h1>
            <img
              src="../assets/profile-icon-png-917.png"
              alt="profile"
              style={{ width: '5em', margin: '5px 25px 0' }}
            />
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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Categorie;
