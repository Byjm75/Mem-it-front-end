import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Home } from './pages/Home';


const App = () => {
  return (
    <div >
      <BrowserRouter>
        {/*Ici un composant directement avec le nom**/}
        <Routes>
          <Route path="/" element={<Home />} /> Ici une page avec son chemin
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
