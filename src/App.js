import React from 'react';
import NovelaForm from './components/NovelaForm';
import NovelaList from './components/NovelaList';
import useNovelas from './hooks/useNovelas';

function App() {
  const { novelas, agregarNovela, eliminarNovela, editarNovela, novelaParaEditar } = useNovelas();

  return (
    <div className="App">
      <h1>Mis Novelas Favoritas</h1>
      <NovelaForm agregarNovela={agregarNovela} novelaParaEditar={novelaParaEditar} />
      <NovelaList novelas={novelas} eliminarNovela={eliminarNovela} editarNovela={editarNovela} />
    </div>
  );
}

export default App;


