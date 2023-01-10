import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Home } from './Pages/Home';
// import Profil from './Pages/Profil';
import { SignUp } from './Pages/SignUp';
import { SignIn } from './Pages/SignIn';
import HomeAdmin from './Pages/Admin/HomeAdmin';
import UserAdmin from './Pages/Admin/UserAdmin';
import Dashboard from './Pages/Dashboard';
import Categorie from './Pages/Categorie';
import CreateCategory from './Pages/CreateCategory';
import CreateTask from './Pages/CreateTask';
import { Home } from './Pages/Home';
import Profil from './Pages/Profil';
import Memos from './Pages/Memos';
import { SignUp } from './Pages/SignUp';
import { SignIn } from './Pages/SignIn';
import HomeAdmin from './Pages/Admin/HomeAdmin';
import UserAdmin from './Pages/Admin/UserAdmin';
import Dashboard from './Pages/Dashboard';
import Categorie from './Pages/Categorie';
import CreateCategory from './Pages/CreateCategory';
import CreateTask from './Pages/CreateTask';
import { Home } from './Pages/Home';
import Profil from './Pages/Profil';
import Memos from './Pages/Memos';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        
        {/*Ici un composant directement avec le nom**/}
        <Routes>
          <Route path="/" element={<Home />} /> Ici une page avec son chemin
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/categorie" element={<Categorie />} />
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/adminUsers" element={<UserAdmin />} />
          <Route path="/createCategory" element={<CreateCategory />} />
          <Route path="/createTask" element={<CreateTask />} />
          <Route path="/memo" element={<Memos />} />
        </Routes>
      </BrowserRouter>
      <div></div>
    </div>
  );
};
export default App;
