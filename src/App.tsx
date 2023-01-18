import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { HomeAdmin } from './pages/Admin/HomeAdmin';
import { UserAdmin } from './pages/Admin/UserAdmin';
import { Dashboard } from './pages/Dashboard';
import { CreateCategory } from './pages/CreateCategory';
import { Home } from './pages/Home';
import { Profil } from './pages/Profil';
import { Memos } from './pages/Memos';
import { MemosUncat } from './pages/MemosUncat';
import { CreateMemo } from './pages/CreateMemo';

export const App = () => {
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
          <Route path='/memo/:categoryId' element={<Memos />} />
          <Route path='/admin' element={<HomeAdmin />} />
          <Route path='/adminUsers' element={<UserAdmin />} />
          <Route path='/createCategory' element={<CreateCategory />} />
          
          {/* <Route path='/createMemo' element={<CreateMemo />} /> */}
          <Route path='/memoUnCat' element={<MemosUncat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
