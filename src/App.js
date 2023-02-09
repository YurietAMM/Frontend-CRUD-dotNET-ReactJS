import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabla from './jsx/tabla';
import Formulario from './jsx/formulario';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div className='col-4'>
          <Formulario></Formulario>
        </div>

        <div className='col-8'>
          <Tabla></Tabla>
        </div>
      </div>
    </div>
  );
}

export default App;
