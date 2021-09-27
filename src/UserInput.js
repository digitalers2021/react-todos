import {useEffect, useState} from 'react';
import React from "react";

/*export default class UserInput extends React.Component {
  state = {
    name: "reactgo",
  };
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>{" "}
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
        />
      </div>
    );
  }
  componentDidMount(){
    console.log("El componente esta en el DOM")

  }
  componentDidUpdate() {
    console.log("UserInput se actualizo")

  }
}*/



export default function UserInput(){
  const [nombre, setNombre] = useState("Pepe")
  const [apellido, setApellido] = useState("Rodriguez")

  // En verdad useEffect espera dos parametros
  // useEffect(callback[, dependencies]);
  useEffect(() => {
    document.title = `Titulo ${nombre}`;  
    console.log("Update  en UserInput")
  });

  useEffect(() => {
    document.title = `Titulo ${apellido}`;  
    console.log("SOLO SE EJECUTA UNA VEZ")
  }, []);



  useEffect(() => {
    document.title = `Titulo ${apellido}`;  
    console.log("Cambio apellido")
  }, [apellido]);

  const handleChange = (e) => {
    setNombre(e.target.value)
  }

  const handleLastname = (e) => {
    setApellido(e.target.value)
  }



  return (
    <div>
      <h1>{nombre}</h1>
      <input onChange={handleChange} value={nombre}></input>
      <h1>{apellido}</h1>
      <input onChange={handleLastname} value={apellido}></input>
    </div>

  )

}
