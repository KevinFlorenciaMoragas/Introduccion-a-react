import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddForm = ({ enviarFormulario }) => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    enviarFormulario({ nombre, apellidos });
    setNombre('');
    setApellidos('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Apellidos"
          value={apellidos}
          onChange={(event) => setApellidos(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
};

AddForm.propTypes = {
  enviarFormulario: PropTypes.func.isRequired,
};

export default AddForm;