import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import CategoriesForm from "./components/CategoriesForm";

export const App = () => {
  return (
    <div>
      <img
        src={require("./assets/JPEG_example_flower.jpg")}
        alt='logo'
        width='50em'
      />
      <BrowserRouter>
        <Navbar />
        Ici un composant directement avec le nom
        <Routes>
          <Route path='/' element={<Home />} /> Ici une page avec son chemin
        </Routes>
      </BrowserRouter>
      <div>
        <CategoriesForm />
      </div>
    </div>
  );
};
