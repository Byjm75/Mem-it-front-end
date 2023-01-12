/* eslint-disable array-callback-return */
import axios from 'axios';
import { Key, useEffect, useState } from 'react';
import AddBtn from '../components/AddBtn';
import CardMemo from '../components/CardMemo';
// import CardPlus from "../components/CardPlus";
import CardPlusMemo from '../components/CardPlusMemo';
import FooterConnect from '../components/FooterConnect';
import { Sidebar } from '../components/Sidebar';
import ToolsBar from '../components/ToolsBar';
import { Memos } from '../Interface/Interface';
import Categorie from './Categorie';
import { Categories } from '../Interface/Interface';
import { Category } from '@mui/icons-material';

let listeMemos: Memos[] = [];

const Memo = () => {
  const [listmemoDisplayed, setListMemoDisplayed] = useState<Memos[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:8085/api/tache', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        listeMemos = res.data;
        setListMemoDisplayed(res.data);
      });
  }, []);

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
        <ToolsBar />
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
            margin: '0 45px 0 auto',
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
              Mémos
            </h1>
          </div>
          <hr />

          <div
            className=""
            style={{
              display: 'flex',
              justifyContent: 'space-bettwen',
              flexWrap: 'wrap',
              width: '100%',
            }}
          >
            <div>
              <CardPlusMemo />
            </div>

            {listmemoDisplayed.map((memo: Memos, i: Key | null | undefined) => (
              <ul key={i}>
                <li
                  key={i}
                  style={{
                    listStyleType: 'none',
                    position: 'relative',
                    right: '40px',
                    width: '100%',
                  }}
                >
                  <CardMemo memoAffich={memo} />
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

export default Memo;
