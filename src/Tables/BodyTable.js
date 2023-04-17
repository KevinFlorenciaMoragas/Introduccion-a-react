import React from "react";

const BodyTable = (props) => {
const { datosPersonas,eliminarPersona } = props;
    const filas = props.datosPersonas.map((persona, index) => {
    return (
        <tr key={index}>
            <td>{persona.nombre}</td>
            <td>{persona.apellidos}</td>
            <td><button onClick={() => eliminarPersona(index)}>Eliminar</button></td>
        </tr>
    );
});
return <tbody>{filas}</tbody>
}
export default BodyTable;