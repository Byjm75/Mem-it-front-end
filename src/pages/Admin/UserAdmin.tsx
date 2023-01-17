import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ToolsBar } from '../../components/ToolsBar';
import { UserData } from '../../interface/Interface';

let listeUsers: UserData[] = [];

export const UserAdmin = () => {
  const selectUser = useRef<HTMLButtonElement>(null);
  console.log('la valeur du button selectUser', selectUser.current?.value);

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

  const handleDelete = (e: React.FormEvent<HTMLButtonElement>) => {
    if (selectUser.current?.value) {
      axios
        .delete(
          `http://localhost:8085/api/utilisateur/${selectUser.current?.value}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        .then((res) => {
          listeUsers = listeUsers.filter(
            (user) =>
              user.id && user.email && user.pseudo !== selectUser.current?.value
          );
          listeUsers = res.data;
          setListUsersDisplayed([...listeUsers]);
          console.log(res.data);
        });
    } else {
    }
  };
  return (
    <div>
      <ToolsBar onSearch={handleUserInput} />
      <table className="table table-striped">
        <thead className="thead-dark">
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
              <td className="button mr-3">{user.id}</td>
              <td>{user.email}</td>
              <td>{user.pseudo}</td>
              <td>
                <button
                  type="button"
                  value={user.id}
                  key={user.id}
                  className="btn btn-danger"
                  ref={selectUser}
                  onClick={handleDelete}
                >
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
