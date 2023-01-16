import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AddBtn } from '../components/AddBtn';
import { CardMemo } from '../components/CardMemo';
import { FooterConnect } from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import { ToolsBar } from '../components/ToolsBar';
import { MemosProps } from '../interface/Interface';

let listeMemos: MemosProps[] = [];

export const Memos = () => {
  const [listmemoDisplayed, setListMemoDisplayed] = useState<MemosProps[]>([]);

  let { categoryId } = useParams();
  console.log("l'id catégorie", categoryId);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:8085/api/tache', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        listeMemos = res.data.filter((memo: MemosProps) => {
          if (memo.categorie_) {
            return memo.categorie_.id === categoryId;
          }
        });
        setListMemoDisplayed(listeMemos);
      });
  }, []);
  const handleUserInput = (userInputText: string) => {
    console.log("qu'a tapé mon user ? : ", userInputText);
    let catTemporaire = [...listmemoDisplayed];
    if (userInputText.length > 0) {
      catTemporaire = catTemporaire.filter((e) =>
        e.title.includes(userInputText)
      );
      setListMemoDisplayed(catTemporaire);
      console.log('ma nouvelle listeState après search : ', listmemoDisplayed);
      console.log('ma nouvelle liste après search : ', catTemporaire);
    } else {
      setListMemoDisplayed(listeMemos);
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
            position: 'fixed',
            overflow: 'hidden',
            zIndex: '1',
          }}
        >
          <Sidebar />
        </div>

        <div
          style={{
            width: '64%',
            margin: '0 auto',
            position: 'relative',
            left: '25px',
          }}
        >
          <div>
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
              Mémos
            </h1>
          </div>
          <hr />

          <div className='  '>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-bettwen',
                flexWrap: 'wrap',
              }}
            >
              {listmemoDisplayed.map((memo, i) => (
                <ul key={i}>
                  <li
                    key={i}
                    style={{
                      listStyleType: 'none',
                      position: 'relative',
                      right: '30px',
                    }}
                  >
                    <CardMemo memoAffich={memo} />
                  </li>
                </ul>
              ))}
            </div>
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
