import React from 'react';
import NovelaItem from './NovelaItem';

const NovelaList = ({ novelas, eliminarNovela, editarNovela }) => {
    return (
        <ul>
            {novelas.map((novela, index) => (
                <NovelaItem
                    key={index}
                    novela={novela}
                    onEliminar={() => eliminarNovela(index)}
                    onEditar={() => editarNovela(index)}
                />
            ))}
        </ul>
    );
};

export default NovelaList;
