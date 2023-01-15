import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToolsBar } from '../../components/ToolsBar';
import { UserData } from '../../Interface/Interface';


let listeUsers: UserData[] = [];

export const UserAdmin = () => {
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

  const handleUserInput = (userInputText: string) => {
    console.log("qu'a tapé mon user ? : ", userInputText);
    let catTemporaire = [...listUsersDisplayed];
    if (userInputText.length > 0) {
      catTemporaire = catTemporaire.filter((e) =>
        e.email.includes(userInputText)
      );
      setListUsersDisplayed(catTemporaire);
      console.log('ma nouvelle listeState après search : ', listUsersDisplayed);
      console.log('ma nouvelle liste après search : ', catTemporaire);
    } else {
      setListUsersDisplayed(listeUsers);
    }
  };

  return (
    <div>
      <ToolsBar onSearch={handleUserInput} />
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
              <td className='button mr-3'>{user.id}</td>
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
