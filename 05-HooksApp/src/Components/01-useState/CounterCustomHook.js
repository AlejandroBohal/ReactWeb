import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './CounterApp.css';

const CounterCustomHook = () => {
    const {state,increment,decrement,reset} = useCounter(100);
    //no olvidar, para llamar un método con argumentos es necesaria una arrow function.
    return (
        <>
          <h1>Counter with hook: {state}</h1>
          <hr/>
          <button onClick = {() => increment(1)} className="btn btn-warning">+1</button> 
          <button onClick = {reset} className="btn btn-warning">Reset</button>
          <button onClick = {() => decrement(1)} className="btn btn-warning">-1</button>  
        </>
    )
}

export default CounterCustomHook
