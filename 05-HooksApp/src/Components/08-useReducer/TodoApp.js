import React, { useReducer, useEffect } from 'react'
import {todoReducer} from './todoReducer';
import './styles.css'
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


export const TodoApp = () => {
    // El use reducer es una alternativa al useState
    // sirve para manejar estados complejos.
    // el dispatch se encarga de disparar las acciones hacia el reducer.
    // La función init inicializa los valores por defecto de la aplicación.
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    };
    // Ejemplo 1 sencillo
    const [todos,dispatch] = useReducer(todoReducer, [],init);
    
    // Cuando los todos cambien se hará el siguiente efecto:
    useEffect(() => {
        // El local storage solo guarda strings
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos]);
    
    const handleDelete = (todoId) =>{
        dispatch({
            type: 'delete',
            payload: todoId,
        });
    };
    const handleToggle = (todoId) => {
        dispatch({
            type:'toggle',
            payload:todoId,
        });
    };
    const handleAddTodo = (todo) => {
        dispatch({
            type: 'add',
            payload: todo,
        });
    };

    
    return (
        <>
            <h1>TodoApp {todos.length} </h1>
            <hr/>
            <div className='row'>
                <div className='col-7'>
                <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
                </div>
                <div className='col-5'>
                    <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </>
    )
}
