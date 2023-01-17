import axios from 'axios';
import { useEffect, useState } from 'react';
import { AddBtn } from '../components/AddBtn';
import { CardMemo } from '../components/CardMemo';
import { FooterConnect } from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import { ToolsBar } from '../components/ToolsBar';
import { MemosProps } from '../interface/Interface';

let listeMemos: MemosProps[] = [];

export const MemosUncat = () => {
  const [listmemoDisplayed, setListMemoDisplayed] = useState<MemosProps[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:8085/api/tache', {
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
                borderBottom: '4mm ridge #007872',
                color: '#007872',
                fontWeight: 'bold',
              }}
            >
              Mémos
            </h1>
          </div>

          <div
            style={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
            }}
          >
            {listmemoDisplayed.map((memo, i) => (
              <ul key={i}>
                <li
                  key={memo.id}
                  style={{
                    listStyleType: 'none',
                    margin: '0 10px',
                  }}
                >
                  <CardMemo memoAffich={memo} />
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
