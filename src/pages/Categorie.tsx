import { useEffect } from 'react';
import CardCategory from '../components/CardCategory';
import Footer from '../components/Footer';
import ToolsBar from '../components/ToolsBar';
import { useState } from 'react';
import axios from 'axios';
import {Sidebar} from '../components/Sidebar';


export interface Categories {
  id: string;
  title: string;
  image: string;
  favoris: string;
}

const Categorie = () => {
  const [listCatDisplayed, setListCatDisplayed] = useState<Categories[]>([]);
  useEffect(() => {
    axios
      .get('http://localhost:8085/api/categorie', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((res) => {
        console.log(res);
        setListCatDisplayed(res.data);
      });
  }, []);
  return (
    <div>
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
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'fixed',
            overflow: 'hidden',
            zIndex: '1',
          }}>
        <Sidebar/>
        </div>
        <div style={{ width: '64%', margin: '0 auto' }}>
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
              Catégorie
            </h1>
          </div>
          <hr />
          <div className="card">
            <div className="card-header">
              <div
                className="card-tools row"
                style={{ display: 'flex', justifyContent: 'space-around' }}
              >
                <div>
                  {listCatDisplayed.map((categorie) => (
                    <li key={categorie.id}>
                      <CardCategory categoryAffich={categorie} />
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Categorie;
