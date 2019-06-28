import React, { Component } from 'react';
import Header from './components/Header'
import NuevaCita from './components/NuevaCita'
import './bootstrap.min.css'


class App extends Component {
  state= {
    citas:[]
  }
  crearNuevaCita = datos=>{
    console.log("nueva cita crear")
    const citas = [...this.state.citas, datos]
    this.setState({
      citas
    })
  }
  render() {
    return (
      <div className="continer">
        <Header
          titulo='Administrador pacientes'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita 
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
