import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const TdodoItem = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const updateTodo = (title, id, completed) => {
        //     here map using for hold data and push inside new array 
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    }
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("")
        }
    }, [setInput, editTodo]);

    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput("");

        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    };
    return (

        <form onSubmit={onFormSubmit}>
            {/* data will be  taken by user and send the data todolist*/}

            <input type='text' className='task-input' placeholder='Enter todo items...' value={input} required onChange={onInputChange} />
            <button className='button-add' type='submit'>
                {editTodo ? "Edit" : "Add"}
            </button>
        </form>
    )
}

export default TdodoItem 
