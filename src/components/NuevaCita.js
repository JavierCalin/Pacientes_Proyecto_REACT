import React, { Component } from 'react';
import uuid from 'uuid'

class NuevaCita extends Component {
    state={
        cita:{
            nombre:'',
            apellido:'',
            fecha:'',
            hora:'',
            sintomas:''
        },
        error:false
    }

    handleChange = e =>{
         this.setState({
            cita:{
                ...this.state.cita,
                [e.target.name]:e.target.value
            },
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        const {nombre, apellido, fecha, hora, sintomas} = this.state.cita;
        if(nombre===''||apellido===''|| fecha===''|| hora===''|| sintomas===''){
            this.setState({
                error:true
            })
            return
        }
        
        const nuevaCita= {...this.state.cita}
        nuevaCita.id= uuid();

        this.props.crearNuevaCita(nuevaCita)
    }

    render() {

        const {error} = this.state;


        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para una nueva cita
                    </h2>
                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> :null }
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Paciente</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Paciente"
                                    name="nombre"
                                    onChange={this.handleChange}
                                    value={this.state.cita.nombre}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Apellido Paciente</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="apellido Paciente"
                                    name="apellido"
                                    onChange={this.handleChange}
                                    value={this.state.cita.apellido}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea 
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="describe los sintomas"
                                    onChange={this.handleChange}
                                    //value={this.state.cita.sintomas}
                                    >
                                </textarea>  
                                    
                            </div>
                        </div>
                        
                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita"/>

                    </form>
                </div>
            </div>
        );
    }
}

export default NuevaCita;