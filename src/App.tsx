import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar /> Ici un composant directement avec le nom
        <Routes>
          <Route path='/' element={<Home />} /> Ici une page avec son chemin
        </Routes>
      </BrowserRouter>
    </div>
  );
};
