import React  from 'react';
import './App.css';



function Todo ({todo, index, completeTodo, removeTodo}){
  return(
    <div style ={{textDecoration: todo.isComplete ? 'line-through': ''}} className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
      <div>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  )
}

export default Todo;