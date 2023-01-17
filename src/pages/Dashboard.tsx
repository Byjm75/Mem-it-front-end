import { AddBtn } from '../components/AddBtn';
import { ToolsBar } from '../components/ToolsBar';
import { Sidebar } from '../components/Sidebar';
import { FooterConnect } from '../components/FooterConnect';
import { Categories } from '../interface/Interface';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardCategory } from '../components/CardCategory';
import zIndex from '@mui/material/styles/zIndex';

let dataCateg: Categories[] = [];
export const Dashboard = () => {
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
      <div>
        <div
          style={{
            display: 'flex',
            position: 'relative',
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
            // left: '25px',
          }}
        >
          <div style={{ height: '40px' }}></div>

          <h1
            className=""
            style={{
              width: '100%',
              position: 'relative',
              left:'30px',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'flex-end',
              margin: '10px 0 0 ',
              color: '#806d42',
              fontWeight: 'bold',
              borderBottom: 'solid 4px #806d42',
            }}
          >
            CATEGORIES
          </h1>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              listStyleType: 'none',
            }}
          >
            {listCatDisplayed.map((categorie) => (
              <li
                key={categorie.id}
                style={{
                  listStyleType: 'none',
                  margin: '10px 0px 0 45px',
                }}
              >
                <CardCategory categoryAffich={categorie} />
              </li>
            ))}
          </div>
        </div>
      </div>{' '}
      <div style={{ height: '100px' }}>
        <div style={{ position: 'fixed', right: '0px', bottom: '120px' }}>
          <AddBtn />
        </div>
      </div>
      <div
        style={{
          marginTop: '30px',
          position: 'fixed',
          bottom: '0',
          width: '100%',
          zIndex: '1',
        }}
      >
        <FooterConnect />
      </div>
    </div>
  );
};
