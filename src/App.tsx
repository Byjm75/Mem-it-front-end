import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import HomeAdmin from './pages/Admin/HomeAdmin';
import UserAdmin from './pages/Admin/UserAdmin';
import { Home } from './pages/Home';
import Dashboard from './pages/Dashboard';
import Categorie from './pages/Categorie';
import { SignIn } from './pages/SignIn';
import CreateCategory from './Pages/CreateCategory';
import CreateTask from './Pages/CreateTask';
import Profil from './pages/Profil';

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        {/*Ici un composant directement avec le nom**/}
        <Routes>
          <Route path='/' element={<Home />} /> Ici une page avec son chemin
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profil' element={<Profil />} />
          <Route path='/categorie' element={<Categorie />} />
          <Route path='/admin' element={<HomeAdmin />} />
          <Route path='/adminUsers' element={<UserAdmin />} />
        </Routes>
      </BrowserRouter>
      <div>
       
      </div>
    </div>
  );
};
export default App;
