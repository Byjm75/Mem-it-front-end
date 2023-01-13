import { AddBtn } from '../components/AddBtn';
import { CardPlus } from '../components/CardPlus';
import { ToolsBar } from '../components/ToolsBar';
import { Sidebar } from '../components/Sidebar';
import { FooterConnect } from '../components/FooterConnect';
import SideBBar from '../components/SideBBar';
import { CardCategory } from '../components/CardCategory';
import { Categories } from '../Interface/Interface';
import { useEffect, useState } from 'react';
import axios from 'axios';

let dataCateg: Categories[] = [];
export const Dashboard = () => {
  const [listCatDisplayed, setListCatDisplayed] = useState<Categories[]>([]);
  //   const handleUserInput = (userInputText: string)=> {

  // }
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
    <div style={{ height: '100vh' }}>
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
      </div>{' '}
      <div>
        <div
          style={{
            display: 'flex',
            position: 'fixed',
            overflow: 'hidden',
            zIndex: '1',
          }}
        >
          <SideBBar />
        </div>
        <div style={{ width: '70%', margin: ' 0 100px 0 auto' }}>
          <div
            style={{
              width: '100%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'flex-end',
            }}
          >
            <div style={{ height: '150px' }}></div>
            <h1
              style={{
                width: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'flex-end',
                margin: '37px 0 0 ',

                color: '#007872',
                fontWeight: 'bold',
              }}
            >
              Mon espace
            </h1>
          </div>
          <hr />

          <div
            className="card-tools "
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-bettwen',
            }}
          >
            {/* <CardPlus /> */}
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
            ))}{' '}
          </div>

          <div style={{ position: 'fixed', right: '15px', bottom: '120px' }}>
            <AddBtn />
          </div>
        </div>
        <div style={{ height: '150px' }}>
          <div
            style={{ position: 'fixed', right: '15px', bottom: '115px' }}
          ></div>
        </div>
        <div>
          <FooterConnect />
        </div>
      </div>
    </div>
  );
};
