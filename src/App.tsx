import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Dashboard } from '@mui/icons-material';
import { HomeAdmin } from './Pages/Admin/HomeAdmin';
import { UserAdmin } from './Pages/Admin/UserAdmin';
import { CreateCategory } from './Pages/CreateCategory';
import { CreateMemo } from './Pages/CreateMemo';
import { Memos } from './Pages/Memos';
import { MemosUncat } from './Pages/MemosUncat';
import { SignIn } from './Pages/SignIn';
import { SignUp } from './Pages/SignUp';
import { Profil } from './Pages/Profil';

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
          <Route path="/memo/:categoryId" element={<Memos />} />
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/adminUsers" element={<UserAdmin />} />
          <Route path="/createCategory" element={<CreateCategory />} />
          <Route path="/createMemo" element={<CreateMemo />} />
          <Route path="/memoUnCat" element={<MemosUncat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
