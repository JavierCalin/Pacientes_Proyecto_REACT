import React, { Component } from 'react';
import Header from './components/Header'
import NuevaCita from './components/NuevaCita'
import './bootstrap.min.css'


class App extends Component {
  render() {
    return (
      <div class="continer">
        <Header
          titulo='Administrador pacientes'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
