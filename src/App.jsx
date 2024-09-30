import Header from './components/Header';
import TdodoItem  from './components/TdodoItem ';
import TodoList from './components/TodoList';
import React, { useEffect, useState } from 'react'
import './App.css';



const App = () => {
  // hold the data inside localstroge for after rerendring data will never loss...
  const intialState=JSON.parse(localStorage.getItem("todos"))|| [];
  const[input,setInput]=useState("");
  const[todos,setTodos]=useState(intialState);
  const[editTodo,setEditTodo]=useState(null);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos]);
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        
        <div>
          {/* this div takeking a data from user and send  the inside list */}
          <TdodoItem  input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
        </div>
        <div>

          {/* hold the user data inside list */}
          <TodoList  todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  )
}

export default App
