/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect } from 'react';
import {CardCategory} from '../components/CardCategory';
import {ToolsBar} from '../components/ToolsBar';
import { useState } from 'react';
import axios from 'axios';
import { Sidebar } from '../components/Sidebar';
import {FooterConnect} from '../components/FooterConnect';
import {AddBtn} from '../components/AddBtn';
import { Categories } from '../Interface/Interface';

let dataCateg: Categories[] = [];
export const Categorie = () => {
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
        <ToolsBar onSearch={handleUserInput} />
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
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

        <div
          style={{
            width: '70%',
            margin: '0 85px 0 auto',
            position: 'relative',
          }}
        >
          <div>
            <h1
              // className="card-title"
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
              Catégories
            </h1>
          </div>
          <hr />
          
          <div
            className=" "
            style={{
              display: 'flex',
              justifyContent: 'space-bettwen',
              flexWrap: 'wrap',
              width: '100%',
            }}
          >
            {listCatDisplayed.map((categorie, i) => (
              <ul key={i}>
                <li
                  key={categorie.id}
                  style={{
                    listStyleType: 'none',
                    width: '100%',
                  }}
                >
                  <CardCategory categoryAffich={categorie} />
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div style={{ height: '150px' }}>
        <div style={{ position: 'fixed', right: '15px', bottom: '115px' }}>
          <AddBtn />
        </div>
      </div>
      <FooterConnect />
    </div>
  );
};

