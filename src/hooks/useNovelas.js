import { useState } from 'react';

const useNovelas = () => {
    const [novelas, setNovelas] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const agregarNovela = (nombre) => {
        if (editIndex !== null) {
            const novelasActualizadas = [...novelas];
            novelasActualizadas[editIndex] = nombre;
            setNovelas(novelasActualizadas);
            setEditIndex(null);
        } else {
            setNovelas([...novelas, nombre]);
        }
    };

    const eliminarNovela = (index) => {
        setNovelas(novelas.filter((_, i) => i !== index));
    };

    const editarNovela = (index) => {
        setEditIndex(index);
    };

    const novelaParaEditar = editIndex !== null ? novelas[editIndex] : null;

    return {
        novelas,
        agregarNovela,
        eliminarNovela,
        editarNovela,
        novelaParaEditar,
    };
};

export default useNovelas;
