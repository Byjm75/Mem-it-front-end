import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    /*
    <BrowserRouter>
        		<NavBar /> Ici un composant directement avec le nom 
        		<Routes>
          			<Route path="/" element={<Home />} /> Ici une page avec son chemin 
       		</Routes>
    </BrowserRouter>
    **/
  );
}

export default App;
