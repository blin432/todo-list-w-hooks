import React, {useState} from 'react';
import './App.css';
import TodoForm from './TodoForm.js';
import Todo from './Todo.js';

function App(){
  const [todos, setTodos] = useState([
      {
        text: 'learn react',
        isComplete:false
      },
      {
        text: 'learn react1',
        isComplete:false
      },
      {
        text:' learn react2',
        isComplete:false
      }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos)
  }

  const removeTodo = index =>{
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return(
    <div className ="app">
      <div className="todo-list">
    {todos.map((todo, index) =>(
      <Todo key = {index} index = {index} todo = {todo} completeTodo = {completeTodo} removeTodo={removeTodo} />
    ))}
    <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}



export default App;