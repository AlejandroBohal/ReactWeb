import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    //El React.memo no funciona por que los props tienen un valor diferente
    //increment apunta a una referencia en memoria diferente.
    console.log('Me volví a generar :( ');
    return (
        <button className="btn btn-primary" onClick={() => increment(5)}>
            Incrementar
        </button>
    );
});
