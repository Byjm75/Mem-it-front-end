import React, { SyntheticEvent } from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../../components/Admin/Topbar/AdminTopBar.css';

export interface Users {
  email: string;
  pseudo: string;
  password: number;
  picture?: string;
}

let listeUsers: Users[] = [];
const UserAdmin = () => {
  const textElement = useRef<HTMLTextAreaElement>;

  const [listUsersDisplayed, setListUsersDisplayed] = useState<Users[]>([
    ...listeUsers,
  ]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('token home', token);
    axios
      .get('http://localhost:8085/api/utilisateur', {
        headers: { authorization: `Bearer ${token}` },
        // token en header
      })
      .then((Response) => {
        listeUsers = Response.data;
        setListUsersDisplayed(listeUsers);
        console.log(listeUsers);
      });
  }, []);

  const handleSubmitForm = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('saisi search bar ', textElement);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          DASHBOARD ADMIN MEM-IT
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <form className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search Users'
              aria-label='Search'
              onSubmit={handleSubmitForm}
              ref={textElement}
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default UserAdmin;
