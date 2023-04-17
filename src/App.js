import React, { useState } from 'react';
import logo from './logo.svg';
import Tabla from './Tables/Tabla';
import './App.css';
import AddForms from './Forms/AddForm';

const App = () => {
  const [personas, setPersonas] = useState([
    { nombre: "Carlos", apellidos: "Sanchez" },
    { nombre: "Pedro", apellidos: "Sanchez" },
    { nombre: "Carlos", apellidos: "Sanchez" },
  ]);

  const enviarFormulario = (persona) => {
    setPersonas([...personas, persona]);
  };

  const eliminarPersona = (index) => {
    setPersonas(personas.filter((persona, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>2DAW: Testeando React</h1>
      <Tabla datosPersonas={personas} eliminarPersona={eliminarPersona} />
      <AddForms enviarFormulario={enviarFormulario} />
    </div>
  );
};

export default App;