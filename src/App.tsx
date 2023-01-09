import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Home } from './Pages/Home';
// import Profil from './Pages/Profil';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import HomeAdmin from './pages/Admin/HomeAdmin';
import UserAdmin from './pages/Admin/UserAdmin';
import Dashboard from './pages/Dashboard';
import Categorie from './pages/Categorie';
import CreateCategory from './pages/CreateCategory';
import CreateTask from './pages/CreateTask';
import { Home } from './pages/Home';
import Profil from './pages/Profil';
import Memos from './pages/Memos';

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
