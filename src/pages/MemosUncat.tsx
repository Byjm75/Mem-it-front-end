import axios from 'axios';
import { useEffect, useState } from 'react';
import { AddBtn } from '../components/AddBtn';
import { CardMemo } from '../components/CardMemo';
import { Footer } from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import { ToolsBar } from '../components/ToolsBar';
import { MemosProps } from '../interface/Interface';

let listeMemos: MemosProps[] = [];

export const MemosUncat = () => {
  const [listmemoDisplayed, setListMemoDisplayed] = useState<MemosProps[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('http://api-memit.dev-formation.fr/api/tache', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        listeMemos = res.data.filter(
          (memo: MemosProps) => memo.categorie_ === null
        );
        setListMemoDisplayed(listeMemos);
      });
  }, []);
  const handleUserInput = (userInputText: string) => {};
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
        {/* <div
          style={{
            display: 'flex',
            position: 'fixed',
            overflow: 'hidden',
            zIndex: '1',
          }}
        > */}
        <Sidebar />
      </div>

      <div
        style={{
          width: '70%',
          margin: '0 55px 0 auto',
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
              margin: '50px 0 0 ',
              color: '#806d42',
              fontWeight: 'bold',
              borderBottom: 'solid 3px #806d42',
            }}
          >
            Mémos
          </h1>

          {/* <div className='  '> */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-start',
              flexWrap: 'wrap',
              listStyleType: 'none',
            }}
          >
            {listmemoDisplayed.map((memo, i) => (
              <ul key={i}>
                <li key={i} style={{ margin: '10px 30px 0 15px' }}>
                  <CardMemo memoAffich={memo} />
                </li>
              </ul>
            ))}
          </div>
        </div>
        {/* </div> */}
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
