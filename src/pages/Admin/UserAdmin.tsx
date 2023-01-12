import React, { SyntheticEvent } from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {ToolsBar} from '../../components/ToolsBar';
import { UserData } from '../../Interface/Interface';

export const UserAdmin = () => {
  const textElement = useRef<HTMLTextAreaElement>;

  let listeUsers: UserData[] = [];

  const [listUsersDisplayed, setListUsersDisplayed] = useState<UserData[]>([
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
    <div>
      {/* <ToolsBar onSearch={} /> */}
      <table className='table table-striped'>
        <thead className='thead-dark'>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Pseudo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsersDisplayed.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.pseudo}</td>
              <td>
                <button type='button' className='btn btn-success'>
                  Success
                </button>
                <button type='button' className='btn btn-danger'>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

