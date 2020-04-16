import React, {useState} from 'react';
import './App.css';


function TodoForm({addTodo}){

    const [value, setValue] = useState('');
    const handleSumbit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue('');
    }
    return (
      <form onSubmit={handleSumbit}>
        <input type="text" className = "input" value={value} placeholder ="add something" onChange = {e => setValue(e.target.value)}/>
      </form>
    )
  }

export default TodoForm;