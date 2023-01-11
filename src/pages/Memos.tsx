import axios from 'axios';
import { useEffect, useState } from 'react';
import AddBtn from '../components/AddBtn';
import CardMemo from '../components/CardMemo';

import CardPlusMemo from '../components/CardPlusMemo';
import FooterConnect from '../components/FooterConnect';
import { Sidebar } from '../components/Sidebar';
import ToolsBar from '../components/ToolsBar';
import { Memos } from '../Interface/Interface';

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
            width: '64%',
            margin: '0 auto',
            position: 'relative',
            left: '25px',
          }}
        >
          <div>
            <h1
              className="card-title"
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

          <div className="  ">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-bettwen',
                flexWrap: 'wrap',
                
              }}
            >
              <div>
                <CardPlusMemo />
              </div>
              
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

export default Memo;
