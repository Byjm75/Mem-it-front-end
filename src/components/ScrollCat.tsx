import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Categories } from '../Interface/Interface';

export const ScrollCat = () => {
  const inputSelect = useRef<HTMLSelectElement>(null);

  console.log('le titre sélectionné est', inputSelect);
  const [categories, setCategories] = useState<Categories[]>([]);
  useEffect(() => {
    axios
      .get('http://localhost:8085/api/categorie', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((res) => {
        console.log(res);
        setCategories(res.data);
      });
  }, []);

  return (
    <>
      <div className='input-group mb-3'>
        <select
          className='form-select'
          id='floatingSelect'
          ref={inputSelect}
          aria-label='Floating label select example'
        >
          <label htmlFor='floatingSelect'>Email</label>
          {categories.map((categ) => {
            return (
              <option id='floatingSelect' value={categ.id}>
                {categ.title}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
