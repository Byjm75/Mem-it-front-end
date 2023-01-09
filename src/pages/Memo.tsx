import axios from 'axios';
import { useEffect, useState } from 'react';
import CardMemo from '../components/CardMemo';
import CardPlus from '../components/CardPlus';
import Footer from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import ToolsBar from '../components/ToolsBar';

export interface Memos {
  title: string;
  date_event: Date;
  body: string;
  image: string;
  url: string;
  date_creation: string;
}

let listeMemos: Memos[] = [];

const Memo = () => {
  const [listmemoDisplayed, setListMemoDisplayed] = useState<Memos[]>([
    ...listeMemos,
  ]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:8080/api/taches', {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        listeMemos = res.data.data;
        setListMemoDisplayed([...listeMemos]);
      });
  }, []);

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
        <ToolsBar />
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <Sidebar />

        <div style={{ width: '80%', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1
              className='card-title'
              style={{ margin: '20px 0 0 20px', color: '#007872' }}
            >
              Catégories
            </h1>
            <img
              src='../assets/profile-icon-png-917.png'
              alt='profile'
              style={{ width: '5em', margin: '5px 25px 0' }}
            />
          </div>
          <hr />
          <div className='card'>
            <div className='card-header'>
              <div
                className='card-tools row'
                style={{ display: 'flex', justifyContent: 'space-around' }}
              >
                <CardPlus />

                {listmemoDisplayed.map((memo, i) => (
                  <ul key={i}>
                    <li key={i}>
                      <CardMemo carte={memo} />
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Memo;
