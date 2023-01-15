import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Categories, ScrollCatProps } from '../interface/Interface';




export const ScrollCat = ({ onSelectCatTitle }: ScrollCatProps) => {
  const categTitleSelect = useRef<HTMLSelectElement>(null);
  console.log('coucou');

  const [categories, setCategories] = useState<Categories[]>([]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
  
    console.log(
      'handleselect : catégorie sélectionnée : ',
      categTitleSelect.current?.value
    );

    const categSelectFiltered: Categories[] = categories.filter((categ) => categ.title === categTitleSelect.current?.value);
    console.log('Scroll Cat - categories filtrées par la catég séléctionnée : ', categSelectFiltered);

    const categSelectObject: Categories = categSelectFiltered[0];    
    console.log('Scroll Cat - categorie objet séléctionnée : ', categSelectObject);

    if (categTitleSelect.current?.value)
      onSelectCatTitle(categSelectObject);
  };
  console.log('le titre sélectionné est', categories);

  useEffect(() => {
    axios
      .get('http://localhost:8085/api/categorie', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((res) => {
        console.log(res.data.data);
        setCategories(res.data);
      });
  }, []);

  return (
    <>
      <label
        className='labels'
        style={{ color: '#806d42', fontWeight: 'bold' }}
      >
        Catégorie de votre mémo (optionnel)
      </label>
      <div className='input-group mb-3'>
        <select
          className='form-select'
          id='floatingSelect'
          aria-label='Floating label select example'
          // value={catTitle}
          onChange={handleSelect}
          ref={categTitleSelect}
        >
          <option value=''>Sélectionner une catégorie</option>
          {categories.map((categ) => {
            return (
              <option id='floatingSelect' value={categ.title} key={categ.id}>
                {categ.title}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
