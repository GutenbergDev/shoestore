import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Home from "./Components/MainHome/Home";
import Marcas from "./Components/Marcas/Marcas";
import Contato from "./Components/Contato/Contato";

const App = () => {



  return (
    <section className="App">
      <BrowserRouter>
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home /> } end/>
            <Route path="marcas" element={<Marcas />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>


      </BrowserRouter>
    </section>
  );
}

export default App;
