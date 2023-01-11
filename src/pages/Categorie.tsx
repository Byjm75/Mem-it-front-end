/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect } from 'react';
import CardCategory from '../components/CardCategory';
import ToolsBar from '../components/ToolsBar';
import { useState } from 'react';
import axios from 'axios';
import { Sidebar } from '../components/Sidebar';
import FooterConnect from '../components/FooterConnect';
import AddBtn from '../components/AddBtn';
import { Categories } from '../Interface/Interface';

let dataCateg: Categories[] = [];
const Categorie = () => {
  const [listCatDisplayed, setListCatDisplayed] = useState<Categories[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8085/api/categorie', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((res) => {
        console.log(res);
        dataCateg = res.data;
        setListCatDisplayed(res.data);
      });
  }, []);

  const handleUserInput = (userInputText: string) => {
    console.log("qu'a tapé mon user ? : ", userInputText);
    let catTemporaire = [...listCatDisplayed];
    if (userInputText.length > 0) {
      catTemporaire = catTemporaire.filter((e) =>
        e.title.includes(userInputText)
      );
      setListCatDisplayed(catTemporaire);
      console.log('ma nouvelle listeState après search : ', listCatDisplayed);
      console.log('ma nouvelle liste après search : ', catTemporaire);
    } else {
      setListCatDisplayed(dataCateg);
    }
  };

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
        <ToolsBar onSearch={handleUserInput} />
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
          }}
        >
          <Sidebar />
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
          {/* <div className="card">
            <div className="card-header"> */}
          <div
            className='card-tools row'
            // style={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-bettwen',
                flexWrap: 'wrap',
                listStyle: 'none',
              }}
            >
              {/* <CardPlus/> */}
              {listCatDisplayed.map((categorie) => (
                <li key={categorie.id}>
                  <CardCategory categoryAffich={categorie} />
                </li>
              ))}
            </div>
            {/* </div>
            </div> */}
          </div>
        </div>
      </div>
      <div style={{ height: '150px' }}>
        {' '}
        <div style={{ position: 'fixed', right: '15px', bottom: '115px' }}>
          <AddBtn />
        </div>
      </div>

      <FooterConnect />
    </div>
  );
};

export default Categorie;
