import React, { Component } from 'react';
import Header from './components/Header'
import NuevaCita from './components/NuevaCita'
import ListaCitas from './components/ListaCitas'
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

  eliminarCita = id=>{
    const citasActuales = [...this.state.citas]
    const citas = citasActuales.filter(cita=> cita.id!== id)
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

              <div className="mt-5 col-md-10 mx-auto">
                <ListaCitas
                  citas={this.state.citas}
                  eliminarCita={this.eliminarCita}
                />
              </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
