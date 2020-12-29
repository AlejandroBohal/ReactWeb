import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css'
export const CallbackHook = () => {
    
    const [counter, setCounter] = useState(10);
    //const increment = () =>{
    //    setCounter(counter +1);
    //}
    //Retorna una versión memorizada de una función si el arreglo de dependencias no ha cambiado.

    const increment = useCallback((num) => {
        setCounter(c => c + num);
    },[setCounter]);
    //2. Es recomendado si la dependencia de un useEffect es un callback
    useEffect(() => {
        // do Something
    }, [increment]);

    //1.Es muy útil cuando se pasan callbacks a un componente hijo y no se desean hacer renders adicionales.
    return (
        <div>
            <h1>useCallback hook: {counter}</h1>
            <hr/>
            <ShowIncrement increment={increment}/>
        </div>
    )
}
