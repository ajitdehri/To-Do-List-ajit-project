import React from 'react'

const TodoList = ({todos,setTodos,setEditTodo}) => {
// this function use for marking the data inside list
    const handleComplete=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                    return {...item, completed: !item.completed};
                };
                return item;
            })
        );
    };
// this function use for edit data from the list
    const handleEdit=({id})=>{
        const findTodo=todos.find((todo)=>todo.id===id);
        setEditTodo(findTodo);

    }



// this function use for delete data item form the list
    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id !==id));

    };
  return (
    <div>
        {todos.map((todo)=>(
            <li className='list-item' key={todo.id}>
                <input type="text"  value={todo.title} className={`list ${todo.completed ? "complete": ""}`} 
                onChange={(event)=>event.preventDefault()}/>
                <div>
                    {/* this button use for marking the list item */}
                    <button className='button-complete task-button' onClick={()=>handleComplete(todo)}>
                    <i class="fa-regular fa-circle-check"></i>
                    </button>

                    {/* this button use for editing list item */}
                    <button className='button-edit  task-button' onClick={()=>handleEdit(todo)}>
                    <i class="fa-regular fa-pen-to-square"></i>
                    </button>

                    {/* this buttion responsible for delete the data from inside list item */}
                    <button className='button-delete task-button' onClick={()=>handleDelete(todo)}>
                    <i class="fa-regular fa-trash-can"></i>

                    </button>
                </div>
            </li>
        ))}
      
    </div>
  )
}

export default TodoList
