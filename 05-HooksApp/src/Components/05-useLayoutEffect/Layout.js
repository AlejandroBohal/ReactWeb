import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css'
export const Layout = () => {
    const url = process.env.REACT_APP_API_HOST;
    const {counter:id,increment} = useCounter(1);
    const {loading,data} = useFetch(`${url}/quotes/${id}`);
    const {author,quote} = !!data && data[0]; //Si existe data entonces extraer posición 0
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>
            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div> 
                    )
                :
                    (   
                        <blockquote className="blockquote text-right">
                            <p className="mb-3"> {quote} </p>
                            <footer className="blockquote-footer"> {author} </footer>
                        </blockquote>     
                    )
            }
            {
                !loading && 
                (
                    <button className="btn btn-primary" onClick={increment}>
                        Next quote
                    </button>
                )
            }
            
        </>
    )
}
