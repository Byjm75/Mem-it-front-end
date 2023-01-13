import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DropdownPropsCat } from '../Interface/Interface';
import { Categories } from '../Interface/Interface';
// let dataCateg: DropdownPropsCat[] = []

export const ScrollCat = () /*({ category }: DropdownPropsCat)*/ => {
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
    <div>
      <div className="input-group mb-3">
        {}
        {categories.map((categorie) => (
          <select>
            <option key={categorie.id}>{categorie.title}</option>
          </select>
        ))}
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Options
        </label>

        <input className="form-select" id="inputGroupSelect01" type="select">
          {' '}
        </input>
      </div>
    </div>
  );
};
