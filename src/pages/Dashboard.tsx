import { AddBtn } from '../components/AddBtn';
import { ToolsBar } from '../components/ToolsBar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { Categories } from '../interface/Interface';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardCategory } from '../components/CardCategory';

let dataCateg: Categories[] = [];
export const Dashboard = () => {
  const [listCatDisplayed, setListCatDisplayed] = useState<Categories[]>([]);

  useEffect(() => {
    axios
      .get('http://api-memit.dev-formation.fr/api/categorie', {
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
    <div className='position-sticky'>
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
            margin: '0 55px 0 auto',
          }}
        >
          <h1
            className='card-title'
            style={{
              width: '100%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'flex-end',
              margin: '10px 0 0 ',
              color: '#806d42',
              fontWeight: 'bold',
            }}
          >
            CATEGORIES
          </h1>

          <hr />
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              listStyleType: 'none',
            }}
          >
            {listCatDisplayed.map((categorie) => (
              <li key={categorie.id} style={{ margin: '10px 30px 0 15px ' }}>
                <CardCategory categoryAffich={categorie} />
              </li>
            ))}
          </div>
        </div>
      </div>

      <div style={{ height: '130px' }}>
        <div style={{ position: 'fixed', right: '3px', bottom: '115px' }}>
          <AddBtn />
        </div>
      </div>

      <Footer />
    </div>
  );
};
