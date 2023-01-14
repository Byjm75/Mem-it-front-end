import { AddBtn } from '../components/AddBtn';
import { ToolsBar } from '../components/ToolsBar';
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
        <div style={{ height: '90px' }}></div>
        <div style={{ width: '70%', margin: ' auto' }}>
          <div>
            <h1
              className=""
              style={{
                width: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'flex-end',
                margin: '37px 0 0 ',
                borderBottom: ' 4mm ridge #007872',
                color: '#007872',
                fontWeight: 'bold',
              }}
            >
              Mon espace
            </h1>
          </div>

          <div
            className=" "
            style={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
            }}
          >
            {listCatDisplayed.map((categorie, i) => (
              <ul key={i}>
                <li
                  key={categorie.id}
                  style={{
                    listStyleType: 'none',
                    margin: '0 10px',
                  }}
                >
                  <CardCategory categoryAffich={categorie} />
                </li>
              </ul>
            ))}{' '}
          </div>
        </div>
        <div style={{ height: '150px' }}>
          <div style={{ position: 'fixed', right: '15px', bottom: '115px' }}>
            <AddBtn />
          </div>
        </div>
      </div>
      <FooterConnect />
    </div>
  );
};
