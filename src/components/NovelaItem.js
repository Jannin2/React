import React from 'react';

const NovelaItem = ({ novela, onEliminar, onEditar }) => {
    return (
        <li>
            {novela}
            <button onClick={onEditar}>Editar</button>
            <button onClick={onEliminar}>Eliminar</button>
        </li>
    );
};

export default NovelaItem;
