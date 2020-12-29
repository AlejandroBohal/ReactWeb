import React from 'react'
import { useForm } from '../../hooks/useForm';
import { Todo } from './Todo';

export const TodoAdd = ({handleAddTodo}) => {
    const [{description},handleInputChange,resetForm] = useForm({
        description:''
    });
    const handleSubmit  = (e) => {
        e.preventDefault();
        if( description.length <=1) {alert('Descripción muy corta.'); return; };
        handleAddTodo(new Todo(description));
        resetForm();
    };
    return (
        <>
            <h4>Add todo</h4>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    className='form-control'
                    placeholder="Todo name..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-outline-primary my-1 form-control"
                    type="submit"
                >
                    Add                        
                </button>
                
            </form>    
        </>
    )
}
