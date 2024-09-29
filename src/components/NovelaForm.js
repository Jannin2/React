import React, { useState, useEffect } from 'react';

const NovelaForm = ({ agregarNovela, novelaParaEditar }) => {
    const [nombre, setNombre] = useState('');


    useEffect(() => {
        if (novelaParaEditar) {
            setNombre(novelaParaEditar);
        }
    }, [novelaParaEditar]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre) return;
        agregarNovela(nombre);
        setNombre('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre de la novela"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <button type="submit">{novelaParaEditar ? 'Actualizar' : 'Agregar'}</button>
        </form>
    );
};

export default NovelaForm;
