import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
    // No se pueden usar hooks de manera condicional.
    const [formState, setFormState] = useState({
        name:'',
        email:'',
    });
    const {name,email} = formState;
    const handleInputChange = ({target}) =>{
        setFormState({
            ...formState,
            [target.name]:target.value
        })
    };

    useEffect( () =>{
        console.log('Component changed'); 
    },[]); // Cambios en todo el componente
    useEffect( () =>{
        console.log('Form changed');
    },[formState]); // cambios en el formulario
    useEffect( () =>{
        console.log('Email changed');
    },[email]); //cambios en una parte del formulario
    
    return (
        <>
          <h1>useEffect</h1>
          <hr/>  
            <div className="form-group">
                <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="Your name..."
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    name="email" 
                    className="form-control" 
                    placeholder="Your email..."
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            { (name === '123') && <Message/>}
        </>
    )
}
