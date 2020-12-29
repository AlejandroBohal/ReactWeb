import React from 'react'

export const Small = React.memo(({value}) => {
    //el memo es similar a un cache y hace que los componentes no se vuelvan a llamar
    //si las props son iguales
    console.log('Me volvi a llamar :(');
    return (
        <small>{value}</small>
    )
});
