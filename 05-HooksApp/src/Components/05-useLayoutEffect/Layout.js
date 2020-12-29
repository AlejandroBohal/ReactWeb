import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './Layout.css'
export const Layout = () => {
    const url = process.env.REACT_APP_API_HOST;
    const {counter:id,increment} = useCounter(1);
    const {data} = useFetch(`${url}/quotes/${id}`);
    const {quote} = !!data && data[0]; //Si existe data entonces extraer posición 0

    const pTag = useRef();
    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
    }, [quote])
    return (
        <>
            <h1>Layout Effect</h1>
            <hr/>
            <blockquote className="blockquote text-right">
                <p ref={pTag} className="mb-3"> {quote} </p>
            </blockquote>     
            <button className="btn btn-primary" onClick={increment}>
                Next quote
            </button> 
        </>
    )
}
