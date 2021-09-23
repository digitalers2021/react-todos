import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h2>Ejemplo 1, de clase</h2>
      <Example name="pepito" contadorInicio={0} ></Example>
      <h2>Ejemplo 2, funcional </h2>
      <Example2 contadorInicial={2}></Example2>
    </div>
  );
}

class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: this.props.contadorInicio,
      negativo: 0,
    };
  }

  render() {
    return (
      <div>
        <p>Este componente se llama {this.props.name }</p>
        <p>You clicked {this.state.count} times</p>
        <p>El negativo es: {this.state.negativo}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1, negativo: this.state.negativo - 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

function Example2({ contadorInicial }){

  const [count, setCount] = useState(contadorInicial)

  return (
    <div>
      <p>Hiciste click {count} veces </p>
      <button onClick={ () => setCount(count + 1) }>Click me</button>

    </div>
  )
}



export default App;
