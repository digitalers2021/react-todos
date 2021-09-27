import './App.css';
import UserInput from './UserInput'
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(["Estudiar react", "instalar nodejs", "crear proyecto"]);
  return (
    <div className="App">
      <TodoCount todos={todos}/>
      <TodoList todos={todos}/>
      <AddTodo setTodos={setTodos}/>
    </div>
  );
}




function TodoCount({todos}) {
  return <div>
    Total Todos: {todos.length} 
    </div>;
}

// Si no queremos usar funciones anonimas podemos
// definir una funcion y utilizarla
function lista(todo){
  return (<li key={todo}>{todo}</li>)
};

function TodoList({todos}) {
  console.log("cantidad de elementos: ", todos.length)

  return (
    <ul>
      <UserInput></UserInput>
      {todos.map(function(todo) { return (<li key={todo}>{todo}</li>)} )}
    </ul>
  );
}

function AddTodo({setTodos}) {

  const [esValido, setEsValido] = useState(true)


  function handleSubmit(event) {
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    if (todo === ""){
      console.log("ERROR no hay string")
      setEsValido(false)
    } else {
      console.log(todo)
      console.log(esValido)
      setEsValido(true)
      setTodos(prevTodos => [...prevTodos, todo]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" />
      <button type="submit">Add Todo</button>
      { esValido ? <p></p> : <p>no es valido</p>}
    </form>
  );
}

export default App;
