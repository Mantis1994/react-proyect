import React from "react";
import './App.css';
import Estudios from "./componentes/Estudios";
import MyInfo from "./componentes/Myinfo.js";
import Poraprender from "./componentes/Porapremder";
import Proyectos from "./componentes/Proyectos";










function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <MyInfo 
        nombre="Matias Agustin"
        apellido="Lassalle"
        edad="28"
        email="lassalle15@hotmail.com"
        gmail="maticxen@gmail.com"
        numero="02227468464" />
        
      </div>
      <div className="contenedor-estudios">
        <Estudios />

      </div>
      <div className="contenedor-proyectos">
        <h1>Proyectos</h1>
        <Proyectos />

      </div>
      <div className="contenedor-poraprender">
        <Poraprender />
      </div>




    </div>
  );
}

export default App;
