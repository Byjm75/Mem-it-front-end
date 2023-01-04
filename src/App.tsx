import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Profil from './pages/Profil';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import Categorie from './pages/Categorie';

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} /> Ici une page avec son chemin
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categorie" element={<Categorie />} />
          <Route path="/profil" element={<Profil />} />
          
        </Routes>
      </BrowserRouter>
      <div>
       
      </div>
    </div>
  );
};
export default App;
