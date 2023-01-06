import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { SignUp } from './Pages/SignUp';

// import { Home } from './Pages/Home';
// import Dashboard from './Pages/Dashboard';
// import Categorie from './Pages/Categorie';
// import { SignIn } from './Pages/SignIn';
// import Profil from './Pages/Profil';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Home } from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profil from './pages/Profil';
import Categorie from './pages/Categorie';
import Memos from './pages/Memo';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> Ici une page avec son chemin
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categorie" element={<Categorie />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/memo" element={<Memos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
