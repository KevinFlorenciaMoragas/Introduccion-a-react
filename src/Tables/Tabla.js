import React from 'react';
import HeadTable from './HeadTable';
import BodyTable from './BodyTable';

function Tabla(props) {
  const { datosPersonas, eliminarPersona } = props;

  return (
    <table className="table">
      <HeadTable />
      <BodyTable datosPersonas={datosPersonas} eliminarPersona={eliminarPersona} />
    </table>
  );
}

export default Tabla;