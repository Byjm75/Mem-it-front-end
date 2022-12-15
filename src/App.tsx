import React from "react";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToolsBar } from "./components/ToolsBar";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/*Ici un composant directement avec le nom**/}
        <Routes>
          <Route path='/' element={<Home />} /> Ici une page avec son chemin
        </Routes>
      </BrowserRouter>
    </div>
  );
};
